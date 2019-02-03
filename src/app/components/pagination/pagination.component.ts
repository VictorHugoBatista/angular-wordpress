import { Component, OnInit, OnDestroy, Input, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';

/**
 * Gera a paginação do bootstrap na tela.
 *
 * @Input startTotalPages : observable que faz trigger com
 * o número de páginas para a geração do componente.
 * @Input shownPageSteps : número de itens exibidos antes
 * e depois do item da página atual.
 * @Output pageSelected : Evento de página selecionada.
 * Passa o número da página atual para a busca em uma API,
 * por exemplo.
 */
@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit, OnDestroy {
  @Input() public startTotalPages : Observable<any>;
  @Input() public shownPageSteps : any;
  @Output() public pageSelected = new EventEmitter();

  /**
   * Página atual exibida no front. Utilizada nos cálculos
   * de exibição do componente na página.
   */
  public currentPage : any = 1;

  /**
   * Número total de páginas exibidas. Utilizada nos cálculos
   * de exibição do componente na página.
   */
  public totalPages : Number;

  /**
   * Itens exibidos na páginação. Array de objetos com
   * o número de página e uma flag que indica se
   * o elemento possui a classe active.
   */
  public paginationItems : Array<Object> = [];

  /**
   * Subscrição no evento @Input startTotalPages,
   * pronta para ser destruída no evento ngOnDestroy.
   */
  public startTotalPagesSubscription : any;

  constructor() { }

  /**
   * Atualiza o componente na tela à cada vez que o evento
   * passado no @Input startTotalPages for executado.
   */
  ngOnInit() {
    this.startTotalPagesSubscription =
      this.startTotalPages.subscribe(totalPages => {
        this.totalPages = totalPages;
        this.regeneratePagination();
      });
  }

  ngOnDestroy() {
    this.startTotalPagesSubscription.unsubscribe();
  }

  /**
   * Evento de click dos elementos do componente.
   * Evita várias requisições de carregamento da mesma página.
   *
   * @param newPageNumber {Number} : Número da nova página atual.
   */
  public onNumberClick(newPageNumber : Number) {
    if (newPageNumber === this.currentPage) {
      return;
    }
    this.currentPage = newPageNumber;
    this.pageSelected.next(newPageNumber);
  }

  /**
   * Gera o elemento de paginação na tela.
   */
  private regeneratePagination() {
    let pages = [];
    // Exibe as páginas anteriores limitadas pelo @Input() shownPageSteps
    // até a segunda página.
    for (let i = this.currentPage - 1;
      i >= this.currentPage - this.shownPageSteps && i > 1; i--) {
      pages.push(this.generatePageItem(i));
    }
    // Exibe a primeira página separadamente, a página atual não seja ela mesma.
    if (1 < this.currentPage) {
      pages.push(this.generatePageItem(1));
    }
    // As páginas anteriores são geradas na ordem crescente.
    // Deve-se reverter para exibir o componente corretamente.
    pages.reverse();
    // Página atual.
    pages.push(this.generatePageItem(this.currentPage, true));
    // Exibe as próximas páginas limitadas pelo @Input() shownPageSteps
    // até a penúltima página, recebida no evento passado no
    // @Input startTotalPages.
    for (let i = this.currentPage + 1;  
      i <= this.currentPage + this.shownPageSteps && i < this.totalPages; i++) {
      pages.push(this.generatePageItem(i));
    }
    // Exibe a última página separadamente, a página atual não seja ela mesma.
    if (this.currentPage < this.totalPages) {
      pages.push(this.generatePageItem(this.totalPages));
    }
    // Adiciona o array gerado ao array que gera o html no template.
    this.paginationItems = pages;
  }

  /**
   * Gera um objeto de página adicionado ao array lido pelo componente no template.
   *
   * @param pageNumber {Number} : Número da página à ser gerada.
   * @param hasActiveClass {Boolean} : Indica se o elemento possui a classe 'active'. Padrão = false.
   */
  private generatePageItem(pageNumber : Number, hasActiveClass : Boolean = false) {
    return {
      page_number: pageNumber,
      active: hasActiveClass,
    };
  }
}

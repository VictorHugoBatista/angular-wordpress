import { Component, OnInit, Input } from '@angular/core';
import { PostsService } from '../../services/wp/posts.service';
import { Subject } from 'rxjs';

/**
 * Componente de listagem de um post type específico na API
 * do WordPress. Chama o componente PaginationComponent no HTML.
 *
 * @Input() postType : Slug do post type à ser buscado na API do WordPress.
 * @Input() perPage : Número de posts exibidos por página.
 */
@Component({
  selector: 'app-list-posts',
  templateUrl: './list-posts.component.html',
  styleUrls: ['./list-posts.component.scss']
})
export class ListPostsComponent implements OnInit {
  @Input() public postType : string;
  @Input() public perPage : Number;

  /**
   * Posts exibidos na listagem, recebidos da API.
   */
  public posts : Array<any>;

  /**
   * Evento de fim do carregamento dos posts da API.
   */
  private endLoadingEvent : Subject<Number> = new Subject<Number>();

  /**
   * Recebe o service que faz a interface com a API do WordPress.
   * @param service {PostsService}.
   */
  constructor(private service : PostsService) {}

  /**
   * Carrega a primeira página de posts da API do WordPress
   * no carregamento da página do front Angular.
   */
  ngOnInit() {
    this.getPostsPage();
  }

  /**
   * Carrega os posts de uma página na API do WordPress e
   * carrega no template. Também atualiza o componente
   * de paginação com os novos dados.
   * @param pageNumber {Number} : Número da página. Padrão = 1.
   */
  private getPostsPage(pageNumber : Number = 1) {
    this.service.getPosts(this.postType, {
      per_page: this.perPage,
      page: pageNumber,
    }).subscribe(response => {
      const totalPages = parseInt(response.headers.get('X-WP-TotalPages'));
      this.posts = response.body;
      this.endLoadingEvent.next(totalPages);
    });
  }
}

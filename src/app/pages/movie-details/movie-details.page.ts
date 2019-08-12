import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieService } from 'src/app/services/movie.service';
import { CartService } from 'src/app/cart.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.page.html',
  styleUrls: ['./movie-details.page.scss'],
})
export class MovieDetailsPage implements OnInit {
  information = null;
  cart = [];
  items = [];

  sliderConfig = {
    spaceBetween: 10,
    centeredSlides: true,
    slidesPerView: 1.75
  }

  constructor(private activatedRoute: ActivatedRoute, private movieService: MovieService, private router: Router, private cartService: CartService) { }

  ngOnInit() {
    let id = this.activatedRoute.snapshot.paramMap.get('id');

    this.movieService.getDetails(id).subscribe(result => {
    this.information = result;
    this.cart = this.cartService.getCart();
    this.items = this.cartService.getProducts();
    })
  }

  addToCart(product){
    this.cartService.addProduct(product);
  }
  
  openCart(){
    this.router.navigate(['cart'])
  }
}

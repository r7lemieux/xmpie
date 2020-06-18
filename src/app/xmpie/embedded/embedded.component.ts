import { AfterViewInit, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-embedded',
  templateUrl: './embedded.component.html',
  styleUrls: ['./embedded.component.scss']
})
export class EmbeddedComponent implements AfterViewInit, OnInit {

  imageUrl: string;
  counter = 0;
  imgFilename = 'demo1imagefile'
  submitJobResult: string
  constructor(private productsService: ProductsService,
              private changeDetection: ChangeDetectorRef) {
    this.imageUrl = `${environment.xmpie.imageBaseUrl}/${this.imgFilename}`
    this.imageUrl = `https://pressocup.xmpie.net/uStore/Controls/ImageProxy.ashx?qs=CXOyFn/CCPbYWW3OVWrGuEPGctwBiExczRTrJKTiDbAe8m3pf3pyf/DlLe3/OwjdMP2HMmdcZI+JRCz1ofjqvF81xQ48ciSUvBeDbqdPETPw+su0gR2O7UY9vPSZn+dDI9HhGBAQlPYI5DMFBxSK2rGOxk4xvZLfuznogT4FMvZptd0BiaMqUGRV76C4AUb5`
  }


  ngOnInit() {
    this.initProduct();
    setInterval(() => {
      this.counter++;
      this.changeDetection.detectChanges();
    },100)
  }

  private initProduct() {
  }

  ngAfterViewInit() {
  }

  buildImageUrl = () => `${this.imageUrl}&counter=${this.counter++}`

  getNewImage = () => {
    this.imageUrl = this.buildImageUrl();
  }

  onSubmit = () => this.productsService.submitDesign2()
    .subscribe( (result: string) => this.submitJobResult = result)
}

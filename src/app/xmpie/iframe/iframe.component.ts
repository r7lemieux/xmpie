import { AfterViewInit, Component, OnInit, Inject, ViewChild } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { ProductsService } from '../../services/products.service';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';

interface Window {
  CustomersCanvas?: any;
}

@Component({
  selector: 'app-iframe',
  templateUrl: './iframe.component.html',
  styleUrls: ['./iframe.component.scss']
})

export class IframeComponent implements OnInit, AfterViewInit {
  profileData = {
    'first name': 'Andrew',
    'last name': 'Simontsev',
    'slogan': 'Be Happy!',
    'logo': 'https://media-exp1.licdn.com/dms/image/C560BAQGDPvtW2dEDSw/company-logo_200_200/0?e=2159024400&v=beta&t=PsKpECuMoRwlx7q9zDW5f6lh9OvgUizdXkaYR_tH4sY',
    'address': '901 N Pitt St, Suite 325\nAlexandria VA, 22314',
    'avatar': 'https://ru.gravatar.com/userimage/16369644/206e77c101a071dc0b192ce71c846d62.jpg?size=600'
  };

  projectForm: FormGroup;

  constructor(@Inject(DOCUMENT) private document: any,
              private fb: FormBuilder,
              private productService: ProductsService
  ) {
    this.projectForm = this.fb.group({
      projectName: [
        null,
        [Validators.required]
      ]
    });
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
  }

}

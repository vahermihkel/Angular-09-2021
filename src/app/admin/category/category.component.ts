import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  categories: string[] = [];

  // ühendus categoryService-ga
  constructor(private categoryService: CategoryService) { }

  // võtke categoryService-st categoriesInService ja pange see this.categories sisse
  ngOnInit(): void {
    this.categories = this.categoryService.categoriesInService;
  }

  onDeleteCategory(category: string) {
    let index = this.categoryService.categoriesInService.indexOf(category);
    this.categoryService.categoriesInService.splice(index, 1);
    this.categories = this.categoryService.categoriesInService;
  }

  onSubmit(addCategoryForm: NgForm) {
    this.categoryService.categoriesInService.push(addCategoryForm.value.category);
    this.categories = this.categoryService.categoriesInService;
  }
}

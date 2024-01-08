import { Component } from "@angular/core";

@Component({
  selector: "app-projects",
  templateUrl: "./projects.component.html",
  styleUrls: ["./projects.component.css"],
})
export class ProjectsComponent {
  currentSlide: number = 0;
  projects: any[] = [
    {
      title: "Pokedex Simples",
      codepenUrl: "https://codepen.io/Echyley/pen/wvxNddG",
      isSlideVisible: true, // Inicialmente, o primeiro slide está visível
    },
    {
      title: "Calculadora",
      codepenUrl: "https://codepen.io/Echyley/pen/ExprWzb",
      isSlideVisible: false,
    },
    // Adicione outros projetos conforme necessário
  ];

  showSlide(index: number): void {
    console.log("Changing to slide:", index);
    this.currentSlide = index;
  }

  nextSlide(): void {
    this.projects[this.currentSlide].isSlideVisible = false;
    this.currentSlide = (this.currentSlide + 1) % this.projects.length;
    this.projects[this.currentSlide].isSlideVisible = true;
  }

  prevSlide(): void {
    this.projects[this.currentSlide].isSlideVisible = false;
    this.currentSlide =
      (this.currentSlide - 1 + this.projects.length) % this.projects.length;
    this.projects[this.currentSlide].isSlideVisible = true;
  }
}

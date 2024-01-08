import { Component, HostListener, ElementRef } from "@angular/core";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.css"],
})
export class NavbarComponent {
  private headerHeight: number = 0;
  private lastScrollTop: number = 0;
  public isHidden: boolean = true;

  constructor(private el: ElementRef) {}

  ngOnInit() {
    const headerElement = this.el.nativeElement.querySelector("header.navbar");

    if (headerElement) {
      this.headerHeight = headerElement.offsetHeight || 0;
    }
  }

  @HostListener("window:scroll", [])
  onWindowScroll() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > this.lastScrollTop && scrollTop > this.headerHeight) {
      this.isHidden = true;
    } else {
      this.isHidden = false;
    }

    this.lastScrollTop = scrollTop;
  }

  @HostListener("window:mousemove", ["$event"])
  onMouseMove(event: MouseEvent) {
    if (event.clientY < this.headerHeight) {
      this.isHidden = false;
    }
  }
}

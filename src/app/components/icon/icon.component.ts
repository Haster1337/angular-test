import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fab, IconDefinition } from '@fortawesome/free-brands-svg-icons';
import { Component, OnInit } from '@angular/core';

const fontLibraries: object[] = [fas, far, fab];

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss']
})
export class IconComponent implements OnInit {
  icon: IconDefinition | undefined;
  libraries: object[] = [];

  constructor() {
    this.libraries = fontLibraries;
  }

  ngOnInit(): void {
  }

  showRandomIcon() {
    const randomLibraryIndex = Math.floor(Math.random() * this.libraries.length);
    const library = this.libraries[randomLibraryIndex];
    const iconNames = Object.keys(library);
    const randomIconIndex = Math.floor(Math.random() * iconNames.length);
    const randomIconName = iconNames[randomIconIndex];
    setTimeout(() => {
      this.icon = (library as { [key: string]: IconDefinition })[randomIconName]
    }, 3000)
    console.log(this.icon)
  }
}

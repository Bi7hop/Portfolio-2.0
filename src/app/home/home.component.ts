import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';

export interface TechIcon {
  icon: string;
  delay: number;
  rotation?: number;
  radius?: number;
  speed?: number;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    MatIconModule, 
    RouterModule
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  techIcons: TechIcon[] = [
    { icon: 'html', delay: 0 },
    { icon: 'css', delay: 0 },
    { icon: 'javascript', delay: 0 },
    { icon: 'code', delay: 0 },
    { icon: 'integration_instructions', delay: 0 },
    { icon: 'developer_mode', delay: 0 },
    { icon: 'devices', delay: 0 },
    { icon: 'web', delay: 0 }
  ];

  ngOnInit() {
    this.techIcons = this.techIcons.map((icon) => {
      const radius = 300 + Math.random() * 400;
      const rotation = Math.random() * 360;
      const speed = Math.max(0.5, Math.random() + 0.5);
      
      return {
        ...icon,
        rotation,
        radius,
        speed, 
        delay: 0
      };
    });
  }
}
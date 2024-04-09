// Angular
import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

// Service
import { HousingService } from '../housing.service';

// Interfaces
import { HousingLocation } from '../housinglocation';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [],
  template: `
    <article>
      <img
        class="listing-photo"
        [src]="housingLocation?.photo"
        alt="Exterior photo of {{ housingLocation?.name }}"
      />
      <section class="listing-description">
        <h2 class="listing-heading">{{ housingLocation?.name }}</h2>
        <p class="listing-location">{{ housingLocation?.city }}</p>
      </section>
      <section class="listing-features">
        <h2 class="section-heading">About this housing location</h2>
        <ul>
          <li>Units Available: {{ housingLocation?.availableUnits }}</li>
          <li>
            Does this location have wifi:
            {{ housingLocation?.wifi ? 'Yes' : 'No' }}
          </li>
          <li>
            Does this location have laundry:
            {{ housingLocation?.laundry ? 'Yes' : 'No' }}
          </li>
        </ul>
      </section>
    </article>
  `,
  styleUrl: './details.component.css',
})
export class DetailsComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  housingService: HousingService = inject(HousingService);
  housingLocation: HousingLocation | undefined;

  constructor() {
    const housingLocationId = Number(this.route.snapshot.params['id']);
    this.housingLocation =
      this.housingService.getHousingLocationById(housingLocationId);
  }
}

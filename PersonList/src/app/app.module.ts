import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ApolloModule, APOLLO_OPTIONS } from 'apollo-angular';
import { HttpClientModule } from '@angular/common/http';
import { InMemoryCache } from '@apollo/client/core';
import { HttpLink } from 'apollo-angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '../app/material/material.module';

import { AppComponent } from './app.component';
import { PersonListComponent } from '../app/components/person-list/person-list.component';
import { PersonFormComponent } from '../app/components/person-form/person-form.component';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { personReducer } from '../app/store/reducers/person.reducer';
import { PersonEffects } from '../app/store/effects/person.effects';

import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { PersonService } from '../app/service/person.service';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({

  declarations: [
    AppComponent,
    PersonListComponent,
    PersonFormComponent
  ],
  imports: [
    BrowserModule,
    ApolloModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    StoreModule.forRoot({ persons: personReducer }),
    EffectsModule.forRoot([PersonEffects]),
    MatProgressSpinnerModule
  ],
  providers: [
    {
      provide: APOLLO_OPTIONS,
      useFactory: (httpLink: HttpLink) => ({
        cache: new InMemoryCache(),
        link: httpLink.create({ uri: 'http://localhost:4000/graphql' })
      }),
      deps: [HttpLink],
    },
    [PersonService],
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

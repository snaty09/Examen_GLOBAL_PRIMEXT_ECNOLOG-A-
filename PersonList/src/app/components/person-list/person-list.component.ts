import { Component, OnInit, ViewChild } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { AppState } from '../../store/app.state';
import * as PersonActions from '../../store/actions/person.actions';
import { selectAllPersons, selectLoading, selectError } from '../../store/selectors/person.selectors';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { PersonFormComponent } from '../person-form/person-form.component';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.css']
})
export class PersonListComponent implements OnInit {

  displayedColumns: string[] = ['FirstName', 'LastNameP', 'LastNameM', 'Address', 'Phone', 'Actions'];
  dataSource = new MatTableDataSource<any>();
  loading$: any;
  error$: any;

  constructor(
    private store: Store<AppState>,
    public dialog: MatDialog,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    // Inicializar los observables después de la inicialización del store
    this.loading$ = this.store.pipe(select(selectLoading));
    this.error$ = this.store.pipe(select(selectError));

    this.store.dispatch(PersonActions.loadPersons());

    this.store.pipe(select(selectAllPersons)).subscribe(persons => {
      this.dataSource.data = persons;
      console.log("Retorno:" + this.dataSource.data )
    });

    this.error$.subscribe((error: any) => {
      if (error) {
        this.snackBar.open(`Error: ${error}`, 'Cerrar', { duration: 3000 });
      }
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  openDialog(person?: any): void {
    const dialogRef = this.dialog.open(PersonFormComponent, {
      width: '400px',
      data: person ? { ...person } : null
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        if (person) {
          this.store.dispatch(PersonActions.updatePerson({ id: person.PersonID, person: result }));
          this.snackBar.open('Persona actualizada exitosamente', 'Cerrar', { duration: 3000 });
        } else {
          this.store.dispatch(PersonActions.addPerson({ person: result }));
          this.snackBar.open('Persona agregada exitosamente', 'Cerrar', { duration: 3000 });
        }
      }
    });
  }

  deletePerson(id: number): void {
    if (confirm('¿Estás seguro de eliminar esta persona?')) {
      this.store.dispatch(PersonActions.deletePerson({ id }));
      this.snackBar.open('Persona eliminada exitosamente', 'Cerrar', { duration: 3000 });
    }
  }

}

import {Component, Input, OnChanges, ViewChild} from '@angular/core';
import {MatDialog, MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {IUser} from '../interfaces/user.interface';
import {AddUserContainer} from '../popups/add-user/add-user.container';
import {DeleteUserContainer} from '../popups/delete-user/delete-user.container';
import {DetailUserContainer} from '../popups/detail-user/detail-user.container';
import {Router} from '@angular/router';

@Component({
    selector: 'app-users',
    templateUrl: './users.component.html',
    styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnChanges {
    @Input() users: IUser[];
    public userPosition = 0;
    displayedColumns: string[] = ['position', 'name', 'description', 'createdAt', 'editedAt', 'action'];
    dataSource: MatTableDataSource<IUser>;

    @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
    @ViewChild(MatSort, {static: true}) sort: MatSort;

    constructor(private dialog: MatDialog,
                private router: Router) {
    }

    ngOnChanges() {
        if (this.users !== null && this.users) {
            this.dataSource = new MatTableDataSource<IUser>(this.users);
            this.dataSource.paginator = this.paginator;
        }
    }

    public showAddUserModal(user?: IUser) {
        this.dialog.open(AddUserContainer, {
            data: user ? user : null
        });
    }

    public showDeleteUserModal(userId: number) {
        this.dialog.open(DeleteUserContainer, {
            data: userId
        });
    }

    public showDetailUserComponent(user?: IUser) {
        this.dialog.open(DetailUserContainer, {
            data: user ? user : null
        });
    }

    public logout() {
        window.localStorage.clear();
        this.router.navigate(['/login']);
    }
}

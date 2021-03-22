import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddUserComponent } from './add-user.component';
import { EditUserComponent } from './edit-user.component';
import { UserComponent } from './user.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'User'
    },
    children: [
      {
        path: '',
        component: UserComponent,
        data: {
          title: 'Main Page'
        },
      },
      {
        path: 'addUser',
        component: AddUserComponent,
        data: {
          title: 'Add New User'
        }
      },
      {
        path: 'editUser',
        component: EditUserComponent,
        data: {
          title: 'Edit User'
        }
      },
      // {
      //   path: 'user',
      //   component: UserComponent,
      //   data: {
      //     title: 'Hello'
      //   }
      // },

    ]
  },
  // {
  //   path: 'addUser',
  //   component: AddUserComponent,
  //   data: {
  //     title: 'Add New User'
  //   }
  // }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
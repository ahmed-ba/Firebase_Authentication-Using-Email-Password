import { Component, OnInit } from "@angular/core";
import { AuthService } from "src/app/auth.service";
import { NavController } from "@ionic/angular";
import { AngularFirestore } from "@angular/fire/firestore";
import { AngularFireStorage } from "@angular/fire/storage";
export interface Image {
  id: string;
  image: string;
}
@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.page.html",
  styleUrls: ["./dashboard.page.scss"],
})

export class DashboardPage implements OnInit {
  userEmail: string;
 // url: any;
  //newImage: Image = {
   // id: this.afs.createId(),
   // image: "",
 // };
  //loading: boolean = false;
  constructor(
    private navCtrl: NavController,
    private authService: AuthService,
    //private afs: AngularFirestore,
    //private storage: AngularFireStorage
  ) {}

  ngOnInit() {
    this.authService.userDetails().subscribe(
      (res) => {
        console.log("res", res);
        if (res !== null) {
          this.userEmail = res.email;
        } else {
          this.navCtrl.navigateBack("");
        }
      },
      (err) => {
        console.log("err", err);
      }
    );
  }

  logout() {
    this.authService
      .logoutUser()
      .then((res) => {
        console.log(res);
        this.navCtrl.navigateBack("");
      })
      .catch((error) => {
        console.log(error);
      });
  }

 
}

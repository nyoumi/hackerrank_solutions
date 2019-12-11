import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, App, LoadingController } from 'ionic-angular';
import { Userservice } from '../../services/user.service';

/**
 * Generated class for the PagesListeRendezVousPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-articles',
  templateUrl: 'articles.html',
})
export class ArticlesPage {
  token: any;
  connected: boolean=true;

  user: any={};
  role=Userservice.role;
  articles: any[]=[];
  slider: any;
  type:string;
  message:string="il n'y a aucun article pour le moment.";
  chargement: boolean;
  docId: any;

  constructor(public navCtrl: NavController,
    private userService:Userservice,
    public navParams: NavParams) {

  }

  ionViewDidLoad() {
    this.docId=this.navParams.get('docId')
    this.type=this.navParams.get("type")
    if(this.docId){
      this.userService.daoGetToken().then(token=>{
        this.getArticles(token.token,this.docId)
      })
    }else{
      this.getArticles()

    }
    
    console.log('ionViewDidLoad PagesListeRendezVousPage');

  }



   getArticles(token?:string, id?:string){
    this.message="chargement en cours..."
    this.chargement=true;

    if (id) {
      this.userService.getDocArticles(token,id,this.type).then(result=>{
        if (result.response) {
          if(result.articles && result.articles.length>0){
            this.articles=result.articles;
          console.log(this.articles)
          //this.traiterRdv(this.Rdv)
          }else{
            this.message="il n'y a aucun article pour le moment."
            this.chargement=false
          }
  
        }
      })
    } else {
      this.userService.getAllArticles().then(result=>{
        if (result.response) {
          if(result.articles && result.articles.length>0){
            this.articles=result.articles;
          console.log(this.articles)
          }else            {
            this.message="il n'y a aucun article pour le moment."
            this.chargement=false;
          } 

  
        }    else   {
          this.message="impossible d'afficher les articles"
          this.chargement=false;

        }    

      })
    }

  }
 

  openArticle(article){
    console.log(article)
    this.navCtrl.push("ArticlePage",{article:article})
    
  }
  
 
  filterFuturs() {
    
    return this.articles.sort(function(a,b){
      let dateB:any=new Date(b.date+"T"+b.heure)
      let dateA:any=new Date(a.date+"T"+a.heure) 
      // Turn your strings into dates, and then subtract them
      // to get a value that is either negative, positive, or zero.
      return dateA - dateB;
    });
  }

}



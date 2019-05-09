import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  open = true;
  heightChecked = false;
  initHeight = 0;
  intval = null;

  ngOnInit(){
    var navLink = document.querySelectorAll(".noti-dot");

    for(let i = 0; navLink.length > i; i++){
     navLink[i].addEventListener('click', function(){
      var sub = this.nextElementSibling;
      this.classList.toggle("subdrop");
    if (sub.style.display == 'block' || sub.style.display==''){
      this.nextElementSibling.style.display = "none";
    }else{
      this.nextElementSibling.style.display = "block";
    }
    }) 

    }

  }


}

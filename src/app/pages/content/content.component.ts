import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {dataFake} from '../../data/dataFake';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  photoCover:string = ''
  contentTitle:string = ''
  contentDescription: string = '.'
  contentMain:string = ''
  private id: string | null = '0'

  constructor(
    //Esse serviço fornece informações sobre a rota ativa, 
    //permitindo que você acesse os parâmetros da URL.
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    /*
    Aqui o método paramMap.subscribe é usado para se inscrever em mudanças nos parâmetros 
    da rota. Sempre que os parâmetros da rota mudam, a função fornecida como argumento é chamada.
    */
    this.route.paramMap.subscribe(value => {
      this.id = value.get('id')
    })

    this.setValuesToComponent(this.id)
  }

  setValuesToComponent(id:string|null) {
    const result = dataFake.filter(article => article.id == id)

    result.map((content) => {
      this.contentTitle = content.title
      this.contentDescription = content.briefDescription
      this.contentMain = content.mainContent
      this.photoCover = content.photoCover
    })
    

  }

}

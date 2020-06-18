import { Injectable } from '@angular/core';
import { xmpieConfiguration } from '../requests/configuration';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { XmlService } from './xml.service';
import { NgxSoapService, Client, ISoapMethodResponse } from 'ngx-soap';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  campaignId = 102734
  dataSourceId = 114944
  documentId = 105870

  accountId = 21
  planId = 100648
  jobId = 280803
  containerId = 105870

  design: any
  xmlText = ''
  xmlRequest: any
  client: Client;

  constructor(private http: HttpClient,
              private soap: NgxSoapService,
              private xmlService: XmlService) {
    this.soap.createClient('assets/xmpie.wsdl').then(client => this.client = client);
  }

  buildXmlRequest = () => {
    const url = '../assets/request.xml'
    this.xmlService.loadXmlConfiguration(url)
      .then(textContent => this.xmlService.parseXml(this.xmlText = textContent))
      .then(xmlRequest => this.xmlRequest = xmlRequest)
  }

  buildJsonRequest = () => {
    const conf = JSON.parse(JSON.stringify(xmpieConfiguration))
    conf.Job.Context.CampaignId = this.campaignId
    conf.Data.RecipientsDataSources.Id = this.dataSourceId
    conf.Plan.Id = this.planId
    conf.Document.Id = this.documentId
    xmpieConfiguration
  }

  updateDesign = () => {
    const url = environment.xmpie.serverBaseUrl
    this.http.post(url, {})
  }

  fetchDesign = () => {
    const url = environment.xmpie.serverBaseUrl
    return this.http.get(url)
  }

  submitDesign = () => {
    const url = `${environment.xmpie.serverBaseUrl}?op=SubmitJob`
    this.xmlService.loadXmlConfiguration('../assets/request.xml')
      .then( (xmlContent: string) => {
        const body = this.xmlText
        const options = {
          headers: {
            contentType: 'text/xml',
            SOAPAction: 'XMPieWSAPI/SubmitJob'
          }
        }
        return this.http.post(url, body, options).toPromise()
          .then((res: any) => {
            console.log(`==> products.service.ts:66  res `, res);
          })
          .catch((err: any) => {
            console.log(`==> products.service.ts:68 err err `, err);
          })
      })
  }

  fetchNewDesign = () => {
    this.fetchDesign().pipe(
      map((design) => {
        if (this.design !== design) {
          return null
        }
        this.design = design
        return design
      })
    )
  }

  submitDesign2(): Observable<string> {
    const body = {
      SubmitJob: {
        xmlns: 'XMPieWSAPI',
        inUsername: '',
        inPassword: '',
        inJobTicket: '',
        inPriority: '',
        inTouchPointID: '',
        inProps: {
          Property: {
            m_Name: '',
            m_Value: '',
          }
        }
      }
    };
    return (<any>this.client).Add(body).pipe(
      map((response: ISoapMethodResponse) => response.result.SubmitJobResponse.SubmitJobResult)
    )
  }
}

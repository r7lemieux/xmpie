import { HttpClient, HttpHeaders } from '@angular/common/http';
import * as xml2js from 'xml2js';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class XmlService {

  xmlSerializer: XMLSerializer
  domParser: DOMParser

  constructor(private http: HttpClient) {
    this.xmlSerializer = new XMLSerializer
    this.domParser = new DOMParser()
  }

  loadXmlConfiguration = (url: string) => {
    return this.http.get(url, {
      headers: new HttpHeaders()
        .set('Content-Type', 'text/xml')
        .append('Access-Control-Allow-Methods', 'GET')
        .append('Access-Control-Allow-Origin', '*')
        .append('Access-Control-Allow-Headers', "Access-Control-Allow-Headers, Access-Control-Allow-Origin, Access-Control-Request-Method"),
      responseType: 'text'
    }).toPromise()
  }

  // https://developer.mozilla.org/en-US/docs/Web/Guide/Parsing_and_serializing_XML
  parseXml = (str: string) => this.domParser.parseFromString(str, "application/xml")
  serializeXml = (doc: Document) => this.xmlSerializer.serializeToString(doc)

  // https://www.c-sharpcorner.com/article/reading-xml-file-in-angular-8/
  parseXml1 = (data: string) => {
    return new Promise((resolve, reject) => {
      var k: string | number,
        arr = [],
        parser = new xml2js.Parser(
          {
            trim: true,
            explicitArray: true
          })
      parser.parseString(data, (err: any, result: any) => {
        if (err) return reject(err)
        resolve(result)
      })
    })
  }

}

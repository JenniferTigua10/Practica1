import { Injectable } from '@angular/core';
import PouchDB from 'pouchdb';
import find from 'pouchdb-find';

PouchDB.plugin(find);

@Injectable({
  providedIn: 'root'
})
export class PronosticoService {
  private _db: any;

  constructor() {
    this._db = new PouchDB('pronosticos');
  }

  async addDocument(doc: any) {
    // Asignar un _id único si no existe
    if (!doc._id) {
      doc._id = new Date().toISOString();
    }
    return this._db.put(doc);
  }

  getDocument(id: string) {
    return this._db.get(id);
  }

  getAllDocuments() {
    return this._db.allDocs({ include_docs: true });
  }

  async updateDocument(doc: any) {
    const existingDoc = await this._db.get(doc._id);
    return this._db.put({ ...existingDoc, ...doc });
  }

  deleteDocument(doc: any) {
    return this._db.remove(doc);
  }

  syncWithCouchDB(remoteDbURL: string): Promise<void> {
    const remoteDb = new PouchDB(remoteDbURL);
    return new Promise((resolve, reject) => {
      this._db.sync(remoteDb, {
        live: true,
        retry: true
      })
      .on('change', (change: any) => {
        console.log('Change detected:', change);
      })
      .on('paused', (info: any) => {
        console.log('Replication paused:', info);
      })
      .on('active', (info: any) => {
        console.log('Replication resumed:', info);
      })
      .on('error', (err: any) => {
        console.error('Sync error:', err);
        reject(err);
      })
      .on('complete', () => {
        console.log('Sync completed');
        resolve();
      });
    });
  }
}

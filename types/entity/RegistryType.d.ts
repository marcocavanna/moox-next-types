import * as mongoose from 'mongoose';

import { JsonObject, PopulableField } from '../generic';
import { TeamEntity } from './Team';


export namespace RegistryTypeEntity {

  /** Set of populable model path */
  export type PopulableFields = 'team';

  /**
   * The Model is used to create a new Entity
   * keep in mind that the created entity will not be
   * saved on Database unless the .save() function will be called
   */
  export interface Model extends Statics, mongoose.Model<Document> {
  }


  /**
   * The document is the remapped entity received from database
   * this document will have virtuals and methods defined
   * into entity schema
   */
  export interface Document<PopulatedPath extends PopulableFields = never>
    extends Schema<PopulatedPath>, Methods, Virtuals, mongoose.Document {
    _id: mongoose.Types.ObjectId;

    id: string;
  }


  /**
   * The json interface type define the documents that will
   * be passed to client using API Endpoint response
   */
  export interface JSON<PopulatedPath extends PopulableFields = never>
    extends JsonObject<Schema<PopulatedPath> & Virtuals> {
    _id: string;

    id: string;
  }


  /**
   * Define the Main Schema, describing all field
   * that will be controlled by user and by API
   * this fields will be saved on database
   */
  export interface Schema<PopulatedPath extends PopulableFields = never> {
    /** Type Description */
    description?: string;

    /** Get or Set if Registry is a Customer */
    isCustomer: boolean;

    /** An idle registry is not active */
    isIdle: boolean;

    /** A Prospect Registry could become a Customer */
    isProspect: boolean;

    /** Get or Set if Registry is a Supplier */
    isSupplier: boolean;

    /** Type Name */
    name: string;

    /** Related Team */
    team: PopulableField<TeamEntity.Document, 'team', PopulatedPath>
  }


  /**
   * Describe all methods that each entity document have
   * and that could use once they are mapped into document
   */
  export interface Methods {
  }


  /**
   * Describe all virtuals field
   */
  export interface Virtuals {
  }


  /**
   * Describe all Statics method attached to
   * model class
   */
  export interface Statics {
  }

}

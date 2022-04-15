export interface Scrap {
  _id?: string;
  product?: string;
  quantity?: string;
  location?: string;
  scrapProcessingDescription?: string;
  scrapProducedTime?: string;
  utilizableTime?: string;
  transportationAvailable?: boolean;
  image?: string;
  createdAt?: string;
  creator?: string;
  isLocked?: boolean;
}

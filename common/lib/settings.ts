import { DataValidationRules, Length, isURL, isPosPoints } from './util'

export interface SeriesSettings
{
    seriesname: string;
    emaillistid: string;
    largestcarnumber: number;
    minevents: number;
    dropevents: number;
    classinglink: string;
    seriesruleslink: string;
    requestrulesack: boolean;
    requestbarcodes: boolean;
    usepospoints: boolean;
    pospointlist: string;
    indexafterpenalties: boolean;
    superuniquenumbers: boolean;
    doweekendmembers: boolean;
    weekendregion: string;
    weekendmin: number;
    weekendmax: number;
    resultscss: string;
    resultsheader: string;
    cardtemplate: string;
}

export class DefaultSettings implements SeriesSettings {
    seriesname = ''
    emaillistid = ''
    largestcarnumber = 1999
    minevents = 0
    dropevents = 2
    classinglink = ''
    seriesruleslink = ''
    requestrulesack = false
    requestbarcodes = false
    usepospoints = false
    pospointlist = '20,16,13,11,9,7,6,5,4,3,2,1'
    indexafterpenalties = false
    superuniquenumbers = false
    doweekendmembers = false
    weekendregion = ''
    weekendmin = 0
    weekendmax = 0
    resultscss = ''
    resultsheader = ''
    cardtemplate = ''
}

export const SettingsValidator: DataValidationRules = {
    seriesname:       [Length(2, 64)],
    emaillistid:      [Length(2, 64)],
    largestcarnumber: [],
    minevents:        [],
    dropevents:       [],
    classinglink:     [isURL],
    seriesruleslink:  [isURL],
    requestrulesack:  [],
    requestbarcodes:  [],
    usepospoints:     [],
    pospointlist:     [isPosPoints],
    indexafterpenalties: [],
    superuniquenumbers:  [],
    doweekendmembers:    [],
    weekendregion:       [],
    weekendmin:          [],
    weekendmax:          [],
    resultscss:          [],
    resultsheader:       [],
    cardtemplate:        []
}

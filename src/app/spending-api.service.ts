import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

const USA_SPENDING_API_URL = 'https://api.usaspending.gov/api';

export interface Response<T> {
  results: T[][];
  page_metadata: PageMetadata;
  messages: unknown[];
}

export interface AwardResult {
  awarding_toptier_agency_name: string;
  awarding_toptier_agency_code: string;
  contracts: number;
  direct_payments: number;
  grants: number;
  idvs: number;
  loans: number;
  other: number;
}

export interface PageMetadata {
  page: number;
  total: number;
  limit: number;
  next: number;
  previous: number;
  hasNext: boolean;
  hasPrevious: boolean;
}

@Injectable()
export class SpendingApiService {

  constructor(
    private readonly httpClient: HttpClient
  ) { }

  // https://api.usaspending.gov/api/v2/agency/awards/count/
  getAwardCount() {
    return this.httpClient.get<Response<AwardResult>>(`${USA_SPENDING_API_URL}/v2/agency/awards/count/`).pipe(
      map(response => {
        return response.results[0];
      })
    )
  }

  get awardCountStatic(): AwardResult[] {
    return [
        {
            "awarding_toptier_agency_name": "Department of Agriculture",
            "awarding_toptier_agency_code": "012",
            "contracts": 12286,
            "direct_payments": 990185,
            "grants": 8388,
            "idvs": 1223,
            "loans": 47504,
            "other": 44046
        },
        {
            "awarding_toptier_agency_name": "Department of Defense",
            "awarding_toptier_agency_code": "097",
            "contracts": 679559,
            "direct_payments": 2,
            "grants": 6017,
            "idvs": 9229,
            "loans": 0,
            "other": 94
        },
        {
            "awarding_toptier_agency_name": "General Services Administration",
            "awarding_toptier_agency_code": "047",
            "contracts": 488992,
            "direct_payments": 0,
            "grants": 0,
            "idvs": 17530,
            "loans": 0,
            "other": 0
        },
        {
            "awarding_toptier_agency_name": "Department of Housing and Urban Development",
            "awarding_toptier_agency_code": "086",
            "contracts": 415,
            "direct_payments": 51632,
            "grants": 13925,
            "idvs": 53,
            "loans": 252229,
            "other": 0
        },
        {
            "awarding_toptier_agency_name": "Department of Veterans Affairs",
            "awarding_toptier_agency_code": "036",
            "contracts": 37004,
            "direct_payments": 97665,
            "grants": 408,
            "idvs": 3843,
            "loans": 9152,
            "other": 24368
        },
        {
            "awarding_toptier_agency_name": "Social Security Administration",
            "awarding_toptier_agency_code": "028",
            "contracts": 992,
            "direct_payments": 103071,
            "grants": 66,
            "idvs": 211,
            "loans": 0,
            "other": 0
        },
        {
            "awarding_toptier_agency_name": "Department of Health and Human Services",
            "awarding_toptier_agency_code": "075",
            "contracts": 16672,
            "direct_payments": 3617,
            "grants": 49937,
            "idvs": 1207,
            "loans": 0,
            "other": 232
        },
        {
            "awarding_toptier_agency_name": "Federal Communications Commission",
            "awarding_toptier_agency_code": "027",
            "contracts": 170,
            "direct_payments": 64881,
            "grants": 10,
            "idvs": 13,
            "loans": 0,
            "other": 0
        },
        {
            "awarding_toptier_agency_name": "Railroad Retirement Board",
            "awarding_toptier_agency_code": "060",
            "contracts": 56,
            "direct_payments": 47743,
            "grants": 0,
            "idvs": 4,
            "loans": 0,
            "other": 0
        },
        {
            "awarding_toptier_agency_name": "Small Business Administration",
            "awarding_toptier_agency_code": "073",
            "contracts": 302,
            "direct_payments": 231,
            "grants": 138,
            "idvs": 27,
            "loans": 43865,
            "other": 0
        }
    ]
  }

}

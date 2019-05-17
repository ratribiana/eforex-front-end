import { Injectable } from '@angular/core';
import {MatPaginatorIntl} from '@angular/material';

@Injectable()
export class MatPaginatorIntlCro extends MatPaginatorIntl {

  getRangeLabel = function (page, pageSize, length) {
    const currentPage = page + 1;
    if (length === 0 || pageSize === 0) return 'Page: ' + length;
    return 'Page: ' + currentPage.toString();
  };

}

import { getRouterSelectors } from "@ngrx/router-store";

export const {
    selectUrl,
    selectRouteParams,
    selectQueryParams
}=getRouterSelectors()
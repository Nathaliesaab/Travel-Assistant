import { CommonService } from "../core/CommonService";
import { Location, UpdatePriorityParams } from "../types/declarations";

const oCommonService = new CommonService();

export const Get_All_Locations = async (): Promise<[Location[] | null, any]> => {
    try {
        const response = await fetch(`${oCommonService.APIUrl}/locations/all`, {
            method: "GET",
        }).then((result) => result.json());
        return [response, null];
    } catch (error) {
        return [null, error];
    }
};

export const Filter_Search = async (searchFilters: Record<string, any>) => {
    try {
        const response = await fetch(`${oCommonService.APIUrl}/locations/filter-search`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(searchFilters),
        });
        return [await response.json(), null];
    } catch (error) {
        return [null, error];
    }
};

export const Update_Location_Priority = async (oUpdatePriorityParams: UpdatePriorityParams) => {
    try {
        const response = await fetch(`${oCommonService.APIUrl}/locations/update-priority`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(oUpdatePriorityParams),
        }).then((result) => result.json());
        return [response, null];
    } catch (error) {
        return [null, error];
    }
};

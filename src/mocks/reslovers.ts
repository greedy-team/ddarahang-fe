import { HttpResponse } from 'msw';
import { mockTravelList } from './data/travelListMockData';
import { mockTravelCourseDetails } from './data/travelCourseDetailMockData';

export const travleListResolver = async ({}: { params: { countryName?: string; regionName?: string } }) => {
  try {
    return HttpResponse.json(mockTravelList, { status: 200 });
  } catch (error: unknown) {
    return HttpResponse.json({ message: 'Internal Server Error', error: error }, { status: 500 });
  }
};

export const travelCourseDetailResolver = async ({ params }: { params: { travelCourseId: string } }) => {
  try {
    const travelCourseId = params;
    const response = mockTravelCourseDetails.filter((data) => data.travelCourseId === Number(travelCourseId));
    return HttpResponse.json(response, { status: 200 });
  } catch (error: unknown) {
    return HttpResponse.json({ message: 'Internal Server Error', error: error }, { status: 500 });
  }
};

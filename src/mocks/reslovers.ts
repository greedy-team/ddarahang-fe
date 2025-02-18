import { HttpResponse } from 'msw';
import { mockTravelList } from './data/travelListMockData';
import { mockTravelCourseDetails } from './data/travelCourseDetailMockData';

export const travleListResolver = async () => {
  try {
    return HttpResponse.json(mockTravelList, { status: 200 });
  } catch (error: unknown) {
    return HttpResponse.json({ message: 'Internal Server Error', error: error }, { status: 400 });
  }
};

export const travelCourseDetailResolver = async ({ params }: { params: { travelCourseId: string } }) => {
  try {
    const travelCourseId = params;
    const response = mockTravelCourseDetails.filter((data) => data.travelCourseId === Number(travelCourseId));
    return HttpResponse.json(response, { status: 200 });
  } catch (error: unknown) {
    return HttpResponse.json({ message: 'Internal Server Error', error: error }, { status: 400 });
  }
};

export const sortTravelListByUploadDate = async () => {
  try {
    const response = mockTravelList.sort((a, b) => {
      return new Date(b.uploadDate).getTime() - new Date(a.uploadDate).getTime();
    });
    return HttpResponse.json(response, { status: 200 });
  } catch (error: unknown) {
    return HttpResponse.json({ message: 'Internal Server Error', error: error }, { status: 400 });
  }
};

export const sortTravelListByViewCount = async () => {
  try {
    const response = mockTravelList.sort((a, b) => {
      return b.viewCount - a.viewCount;
    });
    return HttpResponse.json(response, { status: 200 });
  } catch (error: unknown) {
    return HttpResponse.json({ message: 'Internal Server Error', error: error }, { status: 400 });
  }
};

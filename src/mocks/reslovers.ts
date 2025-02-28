import { HttpResponse } from 'msw';
import { mockTravelList } from './data/travelListMockData';
import { mockTravelCourseDetails } from './data/travelCourseDetailMockData';

export const travelListResolver = ({ request }: { request: Request }) => {
  const url = new URL(request.url);
  const filterType = url.searchParams.get('filter');

  let filterData = mockTravelList;

  if (filterType === 'default') {
    filterData = mockTravelList;
  }

  if (filterType === 'viewCount') {
    filterData = mockTravelList.sort((a, b) => {
      return b.viewCount - a.viewCount;
    });
  }

  if (filterType === 'uploadDate') {
    filterData = mockTravelList.sort((a, b) => {
      return new Date(b.uploadDate).getTime() - new Date(a.uploadDate).getTime();
    });
  }

  return HttpResponse.json(filterData, {
    status: 200,
    headers: {
      'Cache-Control': 'no-store',
    },
  });
};

export const travelCourseDetailResolver = async () => {
  try {
    const response = mockTravelCourseDetails[0];
    return HttpResponse.json(response, { status: 200 });
  } catch (error: unknown) {
    return HttpResponse.json({ message: 'Internal Server Error', error: error }, { status: 304 });
  }
};

export const sortTravelListByUploadDate = () => {
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
    if (response && response.length > 0) {
      return HttpResponse.json(response, { status: 200 });
    } else {
      return HttpResponse.json(null, { status: 204 });
    }
  } catch (error: unknown) {
    return HttpResponse.json({ message: 'Internal Server Error', error: error }, { status: 400 });
  }
};

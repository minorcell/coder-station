import request from './request';

export function getMonthlyServer() {
    return request.get("/api/segmentfault/gateway/questions");
}
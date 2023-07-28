class PageUrlConfig {
    public unauthorized = '/unauthorized';
    public notFound = '*';
    public main = '/';
    public auth = '/auth';
    public find = '/find';
    public signIn = '/signin';
    public signUp = '/signup';
    public chat = '/chat';
    public feed = '/feed';
    public feedDetail = '/feed/detail';
    public feedUpload = '/feed/upload';
    public feedEdit = `/feed/edit`;
    public myPage = '/mypage';
    public myEdit = '/mypage/edit';
    public leave = '/leave';
    public notice = '/notice';
    public noticeDetail = '/notice/detail';
    public noticeUpload = '/notice/upload';
    public noticeEdit = '/notice/edit';
    public qnaDetail = '/qna/detail';
    public qnaUpload = '/qna/upload';
    public search = '/search';
    public user = `/user`;
    public temp = '/temp';
    public admin = '/admin';

    addParams(url: string, params: Array<any>) {
        let querystring = [];
        let pageUrl = url;
        if (url.includes('?')) {
            const split = url.split('?');
            pageUrl = split[0];
            const urlParam = split[1];
            if (urlParam.includes('&')) {
                urlParam.split('&').forEach((v, k) => {
                    querystring.push(`${v}${params[k]}`);
                });
            } else {
                querystring.push(`${urlParam}${params[0]}`);
            }
            return `${pageUrl}?${querystring.join('&')}`;
        }
        return pageUrl;
    }
}

export default new PageUrlConfig();

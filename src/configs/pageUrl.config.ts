class PageUrlConfig {
    public notFound = '*';
    public main = '/';
    public feedDetail = `/feed/detail`;
    public post = '/post';
    public update = `/post/edit`;
    public follow = '/follow';
    public auth = '/auth';
    public user = `/user`;
    public myPage = '/mypage';
    public edit = '/mypage/edit';
    public setting = '/mypage/setting';
    public notice = '/notice';
    public noticeDetail = `/notice/detail`;
    public search = '/search';
    public chat = '/chat';
    public unauthorized = '/unauthorized';

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

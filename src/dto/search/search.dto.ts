export default class SearchDto {
    // @Schema(description = "검색결과 아이디")
    public readonly searchId: number = 0;
    // @Schema(description = "경매일자")
    public readonly saleDate: string = '';
    // @Schema(description = "화훼부류명")
    public readonly flowerGubn: string = '';
    // @Schema(description = "품목명")
    public readonly pumName: string = '';
    // @Schema(description = "품종명")
    public readonly goodName: string = '';
    // @Schema(description = "등급명")
    public readonly lv: string = '';
    // @Schema(description = "최고가")
    public readonly maxAmt: number = 0;
    // @Schema(description = "최저가")
    public readonly minAmt: number = 0;
    // @Schema(description = "평균가")
    public readonly avgAmt: number = 0;
}

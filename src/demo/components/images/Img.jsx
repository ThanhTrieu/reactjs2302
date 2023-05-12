
export default function ImageComponent({w, h, source}){
    // props tham so duoi dang object
    // nhan tat ca cac du lieu tu cac component khac truyen vao
    return (
        <img
            width={w}
            height={h}
            src={source}
        />
    )
}
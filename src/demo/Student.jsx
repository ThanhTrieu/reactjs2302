import Logo1 from '../assets/icon-1.png';
import Logo2 from '../assets/icon-2.png';
import Logo3 from '../assets/icon-3.png';

export default function Students(){
    const show = true;
    const dataStudent = [
        {id: 1, name: 'suu', phone: '123', gender: 0, img: Logo1, showLogo: false},
        {id: 2, name: 'ty', phone: '0976', gender: 1, img: Logo2, showLogo: true},
        {id: 3, name: 'hoi', phone: '323', gender: 0, img: Logo3, showLogo: true},
        {id: 4, name: 'dan', phone: '46456', gender: 1, img: Logo3, showLogo: false}
    ];

    const renderRows = (index) => {
        return (index+1) % 2 == 0 ? { backgroundColor: '#ccc' } : {backgroundColor: 'yellow'}
    }

    if(!show){
        return (
            <>
                <p> Khong co ket qua </p>
            </>
        )
    }

    return (
        <>
            <h1> Danh sach sinh vien </h1>
            <table
                width="100%"
                border={1}
                cellPadding={0}
                cellSpacing={0}
            >
                <thead>
                    <tr>
                        <th>MSV</th>
                        <th>Ho ten</th>
                        <th>SDT</th>
                        <th>Gioi tinh</th>
                        <th>Anh</th>
                    </tr>
                </thead>
                <tbody>
                    { dataStudent.map((item, index) => (
                        <tr
                            key={index}
                            style={renderRows(index)}
                        >
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.phone}</td>
                            <td>{item.gender == 1 ? 'Nam' : 'Nu'}</td>
                            <td>
                                { item.showLogo && <img src={item.img} />}
                                {/* {item.showLogo ? <img src={item.img} /> : null} */}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    )
}
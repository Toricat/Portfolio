const Section1 = () => {
  return (
    <section id="section1" className="h-screen flex justify-center items-center bg-blue-500">
      <div className="relative h-full w-full bg-cover bg-center" style={{ backgroundImage: 'url(/1.jpg)' }}>
        {/* Đặt dòng chữ ở góc trên bên trái, xoay 90 độ */}
        <h1 className="absolute top-full left-0  -rotate-90 origin-top-left text-white font-bold" 
            style={{ fontSize: '14vh', }}>HAMINHQUAN
        </h1>
        {/* Bạn có thể thêm nội dung khác ở đây nếu cần */}
      </div>
    </section>
  );
};

export default Section1;

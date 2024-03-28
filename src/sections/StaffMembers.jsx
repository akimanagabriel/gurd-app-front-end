import fidele from "/assets/img/fidele.jpg"
import gloriosse from "/assets/img/gloriosse.jpg"

function StaffMembers() {
  const members = [
    {
      image: fidele,
      name: "Fidele TUYISHIME",
      post: "Founder, Executive Director",
      phone:"(+250) 788 782 246",
      email:"tuyishimefidele1986@gmail.com"
    },
    {
      image: gloriosse,
      name: "Gloriose DUSHIME",
      post: "Chef Operation Officer",
      phone:"(+250) 783 468 611",
      email:"gloriosedushime9@gmail.com"
    },
  ];

  return (
    <section>
      <div className='container'>
        <div className='text-center mb-5'>
          <h3 className='fs-2 fs-md-3'>Our Staff Members</h3>
          <hr
            className='short'
            data-zanim-xs='{"from":{"opacity":0,"width":0},"to":{"opacity":1,"width":"4.20873rem"},"duration":0.8}'
            data-zanim-trigger='scroll'
          />
        </div>
        <div className='row justify-content-center'>
          {members.map((member, index) => (
            <div key={index} className='col-sm-6 col-lg-4 mt-4'>
              <div className='card h-100'>
                <img
                  className='card-img-top'
                  src={member.image}
                  alt={member.post}
                />
                <div
                  className='card-body'
                  data-zanim-timeline='{}'
                  data-zanim-trigger='scroll'
                >
                  <div className='overflow-hidden'>
                    <h5 data-zanim-xs='{"delay":0}'>{member.name}</h5>
                  </div>
                  <div className='overflow-hidden'>
                    <h6
                      className='fw-normal text-500'
                      data-zanim-xs='{"delay":0.1}'
                    >
                      {member.post}
                    </h6>
                    <h6
                      className='fw-normal text-500'
                      data-zanim-xs='{"delay":0.1}'
                    >
                      {member.phone}
                      <br />
                      {member.email}
                    </h6>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default StaffMembers;

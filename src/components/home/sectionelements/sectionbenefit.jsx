import React from 'react'
import { Row, Col, Card } from 'antd'

const SectionBenefits = () => {
  return (
    <div className="bg-[#F8FBFF] py-16">
      <div className="max-w-6xl mx-auto px-4">
        <Row gutter={[24, 24]} align="middle">
          {/* คอลัมน์ซ้าย: หัวข้อ + ข้อความ */}
          <Col xs={24} md={10}>
            <h2 className="text-3xl md:text-4xl font-bold text-[#212433] mb-6">
              The benefits of Ensome
            </h2>
            <p className="text-[#9497A1] text-base md:text-lg leading-relaxed">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
              doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore
              veritatis et quasi architecto beatae vitae dicta sunt explicabo.
            </p>
          </Col>

          {/* คอลัมน์ขวา: 4 การ์ด (2 แถว x 2 คอลัมน์) */}
          <Col xs={24} md={14}>
            <Row gutter={[24, 24]}>
              {/* Card 1: Machine learning */}
              <Col xs={24} sm={12}>
                <Card className="hover:shadow-md transition-shadow flex flex-col items-start">
                  {/* ไอคอน (SVG) ด้านบน */}
                  <div className="mb-3">
                    <svg
                      width="45"
                      height="47"
                      viewBox="0 0 45 47"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      {/* path of machine learning icon */}
                      <path
                        d="M13.7918 7.28421C15.3262 6.12212 17.1994 5.49534 19.1243 5.49996C19.6643 5.49996 20.094 5.78121 20.3438 5.97471C20.6228 6.19521 20.8838 6.47646 21.1178 6.75771C21.2837 6.95923 21.3744 7.21218 21.3743 7.47321V15.625H18.933C18.6676 14.8743 18.1454 14.2417 17.4587 13.8389C16.772 13.436 15.965 13.2889 15.1803 13.4236C14.3956 13.5582 13.6838 13.9659 13.1706 14.5746C12.6575 15.1833 12.376 15.9538 12.376 16.75C12.376 17.5461 12.6575 18.3166 13.1706 18.9253C13.6838 19.534 14.3956 19.9417 15.1803 20.0764C15.965 20.211 16.772 20.0639 17.4587 19.661C18.1454 19.2582 18.6676 18.6256 18.933 17.875H21.3743V39.0587C21.3744 39.2253 21.3375 39.3898 21.2663 39.5404C21.1951 39.691 21.0913 39.8239 20.9625 39.9295C19.923 40.78 18.5325 41.5 16.8743 41.5C14.2058 41.5 12.219 40.1545 10.9343 38.5457C10.0112 37.3995 9.37901 36.0471 9.09152 34.6037C8.21735 34.3706 7.40683 33.9438 6.72002 33.355C5.47802 32.2907 4.49927 30.565 4.49927 28C4.49927 26.7467 4.58252 25.615 4.76927 24.625H11.8118C13.2428 24.625 14.4218 25.6937 14.6018 27.0752C13.8535 27.346 13.225 27.8725 12.8272 28.5616C12.4294 29.2508 12.288 30.0584 12.4278 30.8417C12.5676 31.6251 12.9797 32.3339 13.5913 32.8429C14.2029 33.3519 14.9747 33.6285 15.7704 33.6237C16.5662 33.619 17.3346 33.3332 17.9401 32.8169C18.5456 32.3006 18.9492 31.587 19.0796 30.802C19.2101 30.017 19.0589 29.2112 18.6529 28.5268C18.2469 27.8425 17.6122 27.3235 16.8608 27.0617C16.7659 25.7875 16.1928 24.5964 15.2564 23.7271C14.3199 22.8579 13.0895 22.3748 11.8118 22.375H5.49152C5.83577 21.7045 6.29702 21.1375 6.89777 20.7347C7.04973 20.6341 7.2092 20.5454 7.37477 20.4692C6.73577 18.5972 6.90227 16.4057 7.51877 14.6845C7.91252 13.5775 8.53802 12.5312 9.39752 11.8337C9.96452 11.3725 10.6395 11.0687 11.3775 11.0102C11.7015 9.47346 12.6128 8.20221 13.794 7.28421H13.7918Z"
                        fill="#185CFF"
                      />
                    </svg>
                  </div>
                  {/* ข้อความด้านล่างไอคอน */}
                  <h3 className="text-lg font-semibold text-[#212433] mb-2">
                    Machine learning
                  </h3>
                  <p className="text-[#9497A1]">
                    At vero eos et accusamus et iusto odio dignissimos ducimus qui
                    blanditiis praesentium voluptatum deleniti atque corrupti quos dolores.
                  </p>
                </Card>
              </Col>

              {/* Card 2: Embed analytics */}
              <Col xs={24} sm={12}>
                <Card className="hover:shadow-md transition-shadow flex flex-col items-start">
                  <div className="mb-3">
                    <svg
                      width="35"
                      height="37"
                      viewBox="0 0 35 37"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      {/* path of embed analytics icon */}
                      <path
                        d="M25.4989 2.1875C25.4989 1.73995 25.6767 1.31072 25.9931 0.994257C26.3096 0.677789 26.7388 0.5 27.1864 0.5H32.8114C33.2589 0.5 33.6882 0.677789 34.0046 0.994257C34.3211 1.31072 34.4989 1.73995 34.4989 2.1875V7.8125C34.4989 8.26005 34.3211 8.68928 34.0046 9.00574C33.6882 9.32221 33.2589 9.5 32.8114 9.5C32.3638 9.5 31.9346 9.32221 31.6181 9.00574C31.3017 8.68928 31.1239 8.26005 31.1239 7.8125V6.26L21.0664 16.3175C20.75 16.6335 20.3211 16.811 19.8739 16.811C19.4267 16.811 18.9978 16.6335 18.6814 16.3175L13.1239 10.76L3.62888 20.255C3.47439 20.4208 3.28809 20.5538 3.08109 20.646C2.87409 20.7382 2.65064 20.7878 2.42406 20.7918C2.19748 20.7958 1.97241 20.7541 1.76229 20.6693C1.55216 20.5844 1.36129 20.4581 1.20104 20.2978C1.0408 20.1376 0.914477 19.9467 0.829605 19.7366C0.744732 19.5265 0.703052 19.3014 0.70705 19.0748C0.711047 18.8482 0.760642 18.6248 0.852874 18.4178C0.945106 18.2108 1.07809 18.0245 1.24388 17.87L11.9314 7.1825C12.2478 6.86649 12.6767 6.68898 13.1239 6.68898C13.5711 6.68898 14 6.86649 14.3164 7.1825L19.8739 12.74L28.7389 3.875H27.1864C26.7388 3.875 26.3096 3.69721 25.9931 3.38074C25.6767 3.06428 25.4989 2.63505 25.4989 2.1875ZM2.43638 27.5C2.88393 27.5 3.31316 27.6778 3.62962 27.9943C3.94609 28.3107 4.12388 28.7399 4.12388 29.1875V34.8125C4.12388 35.2601 3.94609 35.6893 3.62962 36.0057C3.31316 36.3222 2.88393 36.5 2.43638 36.5C1.98883 36.5 1.55961 36.3222 1.24314 36.0057C0.92667 35.6893 0.748881 35.2601 0.748881 34.8125V29.1875C0.748881 28.7399 0.92667 28.3107 1.24314 27.9943C1.55961 27.6778 1.98883 27.5 2.43638 27.5ZM13.1239 22.4375C13.1239 21.9899 12.9461 21.5607 12.6296 21.2443C12.3132 20.9278 11.8839 20.75 11.4364 20.75C10.9888 20.75 10.5596 20.9278 10.2431 21.2443C9.92667 21.5607 9.74888 21.9899 9.74888 22.4375V34.8125C9.74888 35.2601 9.92667 35.6893 10.2431 36.0057C10.5596 36.3222 10.9888 36.5 11.4364 36.5C11.8839 36.5 12.3132 36.3222 12.6296 36.0057C12.9461 35.6893 13.1239 35.2601 13.1239 34.8125V22.4375ZM20.4364 25.25C20.8839 25.25 21.3132 25.4278 21.6296 25.7443C21.9461 26.0607 22.1239 26.4899 22.1239 26.9375V34.8125C22.1239 35.2601 21.9461 35.6893 21.6296 36.0057C21.3132 36.3222 20.8839 36.5 20.4364 36.5C19.9888 36.5 19.5596 36.3222 19.2431 36.0057C18.9267 35.6893 18.7489 35.2601 18.7489 34.8125V26.9375C18.7489 26.4899 18.9267 26.0607 19.2431 25.7443C19.5596 25.4278 19.9888 25.25 20.4364 25.25ZM31.1239 17.9375C31.1239 17.4899 30.9461 17.0607 30.6296 16.7443C30.3132 16.4278 29.8839 16.25 29.4364 16.25C28.9888 16.25 28.5596 16.4278 28.2431 16.7443C27.9267 17.0607 27.7489 17.4899 27.7489 17.9375V34.8125C27.7489 35.2601 27.9267 35.6893 28.2431 36.0057C28.5596 36.3222 28.9888 36.5 29.4364 36.5C29.8839 36.5 30.3132 36.3222 30.6296 36.0057C30.9461 35.6893 31.1239 35.2601 31.1239 34.8125V17.9375Z"
                        fill="#185CFF"
                      />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-[#212433] mb-2">
                    Embed analytics
                  </h3>
                  <p className="text-[#9497A1]">
                    At vero eos et accusamus et iusto odio dignissimos ducimus qui
                    blanditiis praesentium voluptatum deleniti atque corrupti quos dolores.
                  </p>
                </Card>
              </Col>

              {/* Card 3: Access control */}
              <Col xs={24} sm={12}>
                <Card className="hover:shadow-md transition-shadow flex flex-col items-start">
                  <div className="mb-3">
                    <svg
                      width="35"
                      height="35"
                      viewBox="0 0 35 35"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      {/* path of access control icon */}
                      <path
                        d="M16.0938 27.3438V28.75C16.0938 29.123 15.9456 29.4806 15.6819 29.7444C15.4181 30.0081 15.0605 30.1562 14.6875 30.1562H11.875V31.5625C11.875 32.3084 11.5787 33.0238 11.0512 33.5512C10.5238 34.0787 9.80842 34.375 9.0625 34.375H3.4375C2.69158 34.375 1.97621 34.0787 1.44876 33.5512C0.921316 33.0238 0.625 32.3084 0.625 31.5625V27.9259C0.625159 27.1801 0.92158 26.4648 1.44906 25.9375L12.3334 15.0531C11.666 12.7869 11.729 10.3681 12.5134 8.1397C13.2978 5.91128 14.7638 3.98635 16.7036 2.63784C18.6433 1.28933 20.9584 0.585694 23.3204 0.626695C25.6825 0.667697 27.9718 1.45126 29.8635 2.86627C31.7553 4.28129 33.1536 6.25594 33.8602 8.51024C34.5668 10.7645 34.5458 13.1841 33.8002 15.4257C33.0545 17.6674 31.6221 19.6175 29.706 20.9994C27.7899 22.3814 25.4874 23.125 23.125 23.125H20.3097V25.9375C20.3097 26.3105 20.1615 26.6681 19.8978 26.9319C19.6341 27.1956 19.2764 27.3438 18.9034 27.3438H16.0909H16.0938ZM25.9375 11.875C26.6834 11.875 27.3988 11.5787 27.9262 11.0512C28.4537 10.5238 28.75 9.80842 28.75 9.0625C28.75 8.31658 28.4537 7.60121 27.9262 7.07376C27.3988 6.54632 26.6834 6.25 25.9375 6.25C25.1916 6.25 24.4762 6.54632 23.9488 7.07376C23.4213 7.60121 23.125 8.31658 23.125 9.0625C23.125 9.80842 23.4213 10.5238 23.9488 11.0512C24.4762 11.5787 25.1916 11.875 25.9375 11.875Z"
                        fill="#185CFF"
                      />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-[#212433] mb-2">
                    Access control
                  </h3>
                  <p className="text-[#9497A1]">
                    At vero eos et accusamus et iusto odio dignissimos ducimus qui
                    blanditiis praesentium voluptatum deleniti atque corrupti quos dolores.
                  </p>
                </Card>
              </Col>

              {/* Card 4: Data analytics */}
              <Col xs={24} sm={12}>
                <Card className="hover:shadow-md transition-shadow flex flex-col items-start">
                  <div className="mb-3">
                    <svg
                      width="37"
                      height="37"
                      viewBox="0 0 37 37"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      {/* path of data analytics icon */}
                      <path
                        d="M2.74934 1.60028C2.74605 1.30191 2.62438 1.01707 2.41108 0.80841C2.19778 0.599752 1.91033 0.484373 1.61196 0.487655C1.31359 0.490937 1.02875 0.612611 0.82009 0.82591C0.611433 1.03921 0.496054 1.32666 0.499336 1.62503V35.375C0.499336 35.6734 0.617862 35.9595 0.828841 36.1705C1.03982 36.3815 1.32597 36.5 1.62434 36.5H35.3743C35.6727 36.5 35.9589 36.3815 36.1698 36.1705C36.3808 35.9595 36.4993 35.6734 36.4993 35.375C36.4993 35.0767 36.3808 34.7905 36.1698 34.5795C35.9589 34.3686 35.6727 34.25 35.3743 34.25H2.74934V1.60028ZM31.9993 32V8.37503C31.999 8.16334 31.939 7.95603 31.8262 7.77692C31.7133 7.59782 31.5522 7.45419 31.3614 7.36253C31.1706 7.27088 30.9578 7.23493 30.7474 7.25881C30.5371 7.28269 30.3378 7.36544 30.1723 7.49753L19.5186 16.0183L12.3073 11.8985C12.1544 11.8113 11.9831 11.7611 11.8072 11.7521C11.6314 11.7431 11.4559 11.7756 11.2948 11.8468L4.99934 14.6435V32H31.9993Z"
                        fill="#185CFF"
                      />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-[#212433] mb-2">
                    Data analytics
                  </h3>
                  <p className="text-[#9497A1]">
                    At vero eos et accusamus et iusto odio dignissimos ducimus qui
                    blanditiis praesentium voluptatum deleniti atque corrupti quos dolores.
                  </p>
                </Card>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    </div>
  )
}

export default SectionBenefits

import React from 'react';
import { Col, Row } from 'antd';
import { PlayCircleOutlined } from '@ant-design/icons';
import database from '../img/imgdata/database.png';

export const Section1 = () => {
  return (
    <div className="flex justify-center ml-[8rem] h-[82">
      <Row gutter={[16, 16]} justify="center" align="middle">
        <Col xs={24} sm={24} md={12} lg={12} xl={12}>
          <div className="w-full max-w-[540px] mx-auto">
            <span className="text-[46px] font-extrabold">
              Find true power in your <br /> data with ensome
            </span>
            <span className="text-[#9497A1] block mt-4">
              <br />
              Sed ut perspiciatis unde omnis iste natus error sit <br />
              voluptatem accusantium doloremque laudantium, totam <br />
              rem aperiam, eaque ipsa quae ab illo inventore veritatis et <br />
              quasi architecto beatae vitae dicta sunt explicabo.
            </span>

            {/* Flex container for buttons */}
            <div className="flex justify-start items-center gap-4 mt-10">
              {/* Learn more button */}
              <div className="w-[168px] h-[44px] border-white bg-[#185CFF] text-white rounded-[6px] flex justify-center items-center">
                <p className="font-bold">Learn more</p>
              </div>

              {/* Watch the demo button */}
              <p className="flex font-semibold font-Manrope text-[14px] space-x-2">
                <PlayCircleOutlined /> <span>Watch the demo</span>
              </p>
            </div>
          </div>
        </Col>

        <Col xs={24} sm={24} md={12} lg={12} xl={12}>
          <img
            src={database}
            alt="Database"
            className="w-full max-w-[845px] mx-auto"
          />
        </Col>
      </Row>
    </div>
  );
};

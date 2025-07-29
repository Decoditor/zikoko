import { FilterOutlined } from "@ant-design/icons";
import { Button, Card, Col, Flex, Row, Select, Space, Typography } from "antd";
import Title from "antd/es/typography/Title";
import React, { useState } from "react";
import { latest } from "../datas";

function Search({ word }) {
  const { Text } = Typography;
  const search = latest.filter((item) => item.title.includes(word));
  const [displayFilter, setDisplayFilter] = useState(false);
  return (
    <div className="pt-30 px-4 lg:px-[6rem]">
      <Title>Search for '{word}'</Title>
      <Flex justify="space-between">
        <Flex gap="large">
          <Text>Articles</Text>
          <Text>Videos</Text>
          <Text>Quizzes</Text>
        </Flex>
        <Button type="ghost" onClick={() => setDisplayFilter(!displayFilter)}>
          Advanced Filters <FilterOutlined />{" "}
        </Button>
      </Flex>
      <div className="w-full border-b border-b-gray-500 pb-4">
        {displayFilter && (
          <Row className="pb-4" gutter={16}>
            <Col span={12}>
              <Select
                placeholder="Search Author Name"
                className="w-full"
                size="middle"
                options={[
                  { value: "Option1", label: "Option One" },
                  { value: "Option2", label: "Option Two" },
                  { value: "Option3", label: "Option Three" },
                  { value: "Option4", label: "Option Four" },
                  { value: "Option5", label: "Option Five" },
                ]}
              />
            </Col>
            <Col span={12}>
              <Select
                placeholder="Search Author Name"
                className="w-full"
                size="middle"
                options={[
                  { value: "Option1", label: "Option One" },
                  { value: "Option2", label: "Option Two" },
                  { value: "Option3", label: "Option Three" },
                  { value: "Option4", label: "Option Four" },
                  { value: "Option5", label: "Option Five" },
                ]}
              />
            </Col>
          </Row>
        )}
      </div>

      <div className="grid gap-8 my-20">
        {search.map((item) => (
          <Card
            key={item.id}
            hoverable
            className="h-[120px] lg:h-[225px] overflow-hidden custom-card"
            bodyStyle={{ padding: 0 }}
          >
            <div className="flex gap-8 ">
              <img src={item.img} alt="" className="h-[225px]" />
              <div className="flex flex-col justify-center gap-2">
                <p className="text-[14px] text-green-800">{item.category}</p>
                <p className="text-[20px]">{item.title}</p>
                <p className="text-[16px] font-thin">
                  {item.content.split(" ").slice(0, 20).join(" ")}
                </p>
                <p className="text-[16px]">
                  {item.creator}{" "}
                  <span className="text-[14px] opacity-50">{item.date} </span>
                </p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default Search;

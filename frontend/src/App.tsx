import React from 'react';
import {
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { Button, Checkbox, Input, Layout, Menu, Table, theme } from 'antd';
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Header from "./components/Header";
import axios from 'axios';
import { useEffect, useState } from 'react';
import { People } from './models/people';
import { BASE_URL } from './util/request';
import { toast } from 'react-toastify';
import type { ColumnsType } from 'antd/es/table';

const { Content, Footer, Sider } = Layout;

const App: React.FC = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const [peoples, setPeoples] = useState<People[]>([]);
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);

  const columns: ColumnsType<People> = [
    {
      title: 'Id',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Favorito',
      dataIndex: 'favorite',
      key: 'favorite',
      render: (_, record) => (
        <Checkbox
          checked={record.favorite}
          onChange={() => toggleFavorite(record.key)}
        />
      )
    },
  ];

  const toggleFavorite = (key: React.Key) => {
    const updatedData = peoples.map((item) => {
      if (item.key === key) {
        axios.patch(`${BASE_URL}/people/${key}/favorite/${!item.favorite}`)
          .then(response => {
            if (!item.favorite == true) {
              toast.info("Favoritado! ❤️ ");
            }
          })
          .catch((error) => {
            console.log(error.message);
          });
        return { ...item, favorite: !item.favorite };
      }
      return item;
    });
    setPeoples(updatedData);
    setSelectedRowKeys([...selectedRowKeys]);
  };

  // FIND BY NAME
  const handleInputChange = (e: { preventDefault: () => void; target: { value: any; }; }) => {
    e.preventDefault();
    const { value } = e.target;
    axios.get(`${BASE_URL}/people/${value}`)
      .then(response => {
        const responsePeople: People[] = response.data || [];
        const dataPeople: People[] = [];
        responsePeople.map(people => {
          dataPeople.push({
            key: people.id,
            id: people.id,
            name: people.name,
            favorite: people.favorite,
          });
        })
        setPeoples(dataPeople);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }

  // FIND BY FAVORITE
  function handleListFavoritesClick(favorite: number) {
    axios.get(`${BASE_URL}/people/favorite/${favorite}`)
      .then(response => {
        const responsePeople: People[] = response.data || [];
        const dataPeople: People[] = [];
        responsePeople.map(people => {
          dataPeople.push({
            key: people.id,
            id: people.id,
            name: people.name,
            favorite: people.favorite,
          });
        })
        setPeoples(dataPeople);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }

  // FIND ALL
  function handleListAllClick() {
    axios.get(`${BASE_URL}/people`)
      .then(response => {
        const responsePeople: People[] = response.data || [];
        const dataPeople: People[] = [];
        responsePeople.map(people => {
          dataPeople.push({
            key: people.id,
            id: people.id,
            name: people.name,
            favorite: people.favorite,
          });
        })
        setPeoples(dataPeople);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }

  useEffect(() => {
    axios.get(`${BASE_URL}/people`)
      .then(response => {
        const responsePeople: People[] = response.data || [];
        const dataPeople: People[] = [];
        responsePeople.map(people => {
          dataPeople.push({
            key: people.id,
            id: people.id,
            name: people.name,
            favorite: people.favorite,
          });
        })
        setPeoples(dataPeople);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, []);

  return (
    <Layout hasSider>
      <Sider
        style={{
          overflow: 'auto',
          height: '100vh',
          position: 'fixed',
          left: 0,
          top: 0,
          bottom: 0,
        }}
      >
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['buscar']}
          items={[
            {
              label: <Input.Search placeholder="Buscar..." onChange={handleInputChange} ></Input.Search>,
              key: 'buscar',
            },
            {
              label: 'Favoritos',
              key: 'favoritos',
              icon: React.createElement(UserOutlined),
              onClick: () => {
                handleListFavoritesClick(1)
              }
            },
            {
              label: 'Todos',
              key: 'todos',
              icon: React.createElement(TeamOutlined),
              onClick: () => {
                handleListAllClick()
              }
            },
          ]}
        ></Menu>
      </Sider>
      <Layout className="site-layout" style={{ marginLeft: 200 }}>
        <ToastContainer />
        <Header />
        <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
          <div style={{ padding: 24, background: colorBgContainer }}>

            <div>
              <Table
                columns={columns}
                dataSource={peoples}
              />
            </div>

          </div>
        </Content>
        <Footer style={{ textAlign: 'center', backgroundColor: '#008cff' }}>Ant Design ©2023 Created by Ant UED</Footer>
      </Layout>
    </Layout>
  );
};

export default App;
import React from 'react';
import { Container, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useSpring, animated } from "react-spring";
import './HomeProduct.css'

const calc = (x, y) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1.1]
const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`

const HomeProduct = ({ homeProduct }) => {
    const history = useNavigate();
    const [props, set] = useSpring(() => ({
        xys: [0, 0, 1],
        config: {
            mass: 5, tension: 350, friction: 40
        }
    }))

    const { title, src, price, description, category } = homeProduct;

    const addToCart = () => {
        const cart = {
          ...homeProduct,
          status: "pending",
        };

        fetch("", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(cart),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.insertedId) {
              history("/cartpage");
            }
          });
      };
    return (
       <Container>
            <div className="col-md-4 mb-5" direction="horizontal">
                <animated.div
                    className="card"
                    onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
                    onMouseLeave={() => set({ xys: [0, 0, 1] })}
                    style={{ transform: props.xys.interpolate(trans) }}
                >
                    <div style={{ height: '20ch', flexDirection: 'row' }} className="align-items-start">
                        <div className="p-3 service">

                            <Image src={src} className="w-25 mb-3" roundedCircle />
                            <h3 className="text-dark">{title}</h3>
                            <p className="describe_text">{description.slice(1, 100)}</p>
                            <p className="category_text">{category}</p>

                            <div className="row text-center mt-3 w-95 m-auto">
                                <div className="col-md-6 col-sm-12 col-lg-6 mt-3">
                                    <h5 className="service_fee">
                                        Course fees:{" "}
                                        <span style={{ color: "red" }}>৳{price}</span>
                                    </h5>
                                </div>
                                <div className="col-md-6 col-sm-12 col-lg-6 ">
                                    <Link to="">
                                        <button className="app_button mt-3">Add cart</button>
                                    </Link>

                                </div>
                            </div>
                        </div>

                    </div>

                </animated.div>
            </div>
       </Container>
    );
};

export default HomeProduct;
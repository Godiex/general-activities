import React, {useEffect} from 'react'
import { Row, Col, Image, Carousel } from "antd";
import { useDispatch, useSelector} from 'react-redux';
import "../css/dashboard.scss";
import { fetchAllAdvertisingImage } from '../../../../state/actions/Configuration/AdvertisingImageAction';

const CarouselComponent = () => {

	const dispatch = useDispatch();
	const advertisingImages = useSelector(state => state['advertisingImage']);

	useEffect(() => dispatch(
		fetchAllAdvertisingImage(async (response)  => {
			 await response;
		})),
	[dispatch]);
	
  return (
	<Row>
		<Col span={14} offset={5}>
			<Carousel  dotPosition='bottom' autoplay>
				{!Array.isArray(advertisingImages) &&	advertisingImages?._payload?.map((item) => (
					<Image
						width='100%'
						height={280}
						src={item['multimedia'].path}
						preview={true}
					/>
				))}
			</Carousel>		
		</Col>
	</Row>
  );
}

export default CarouselComponent;
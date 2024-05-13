import React, { useState } from "react";
import {
	ActivityIndicator,
	Alert,
	Button,
	Image,
	ImageBackground,
	Modal,
	Pressable,
	ScrollView,
	StatusBar,
	Text,
	View,
} from "react-native";
import LogoImage2 from "./assets/adaptive-icon.png";
import Greet from "./Components/Greet";
const LogoImage = require("./assets/adaptive-icon.png");

const App = () => {
	const [state, setState] = useState(false);
	return (
		<View
			style={{
				flex: 1,
				backgroundColor: "plum",
				padding: 60,
			}}
		>
			<Greet name={"Lisa"} />
			<Greet name={"shabi"} />
			<StatusBar backgroundColor={"lightgreen"} barStyle={"default"} hidden />
			<ActivityIndicator />
			<ActivityIndicator size={"large"} />
			<ActivityIndicator size={"large"} color={"midnightblue"} animating />
			<Button
				title="press"
				onPress={() => setState(() => true)}
				color={"midnightblue"}
				disabled={false}
			/>
			<Button
				title="Alert"
				onPress={() => Alert.alert("Invalid data")}
				color={"midnightblue"}
			/>
			<Button
				title="Alert2"
				onPress={() =>
					Alert.alert("Title: Invalid data", "massage: date of birth incorrect")
				}
				color={"midnightblue"}
			/>
			<Button
				title="Alert3"
				onPress={() =>
					Alert.alert(
						"Title: Invalid data",
						"massage: date of birth incorrect",
						[
							{
								text: "Cancle",
								onPress: () => console.log("Cancel pressed"),
							},
							{
								text: "Ok",
								onPress: () => console.log("Ok pressed"),
							},
						]
					)
				}
				color={"midnightblue"}
			/>

			<Modal
				visible={state}
				onRequestClose={() => setState(() => false)}
				animationType="slide"
				presentationStyle="pageSheet"
			>
				<View
					style={{
						flex: 1,
						backgroundColor: "lightblue",
						padding: 60,
					}}
				>
					<Text>Modle Content</Text>
					<Button
						title="Close"
						color={"midnightblue"}
						onPress={() => setState(() => false)}
					/>
				</View>
			</Modal>
			{/* <ScrollView>
				<Pressable onPressIn={() => console.log("Image pressed")}>
					<Image
						source={LogoImage2}
						style={{
							width: 300,
							height: 300,
							objectFit: "cover",
						}}
					/>
				</Pressable>
				<Pressable onPressIn={() => console.log("text pressed")}>
					<Text>
						일본 정부는 왜 라인 매각을 네이버에 압박할까? 일본은 아날로그적인
						나라이다. 스마트폰 시대로 가면서 사회 인프라 전반을 라인 기반으로
						확장했다. 지방 공공 기관을 비롯해서 모든 분야에서 라인의 플러그인
						형태로 지방 정부의 전자정부화가 되었다. 안보의 입장에서 라인을
						컨트롤하는 주체 및 리스크 관리를 일본의 기업이 핸들링하는 것이냐,
						한국 기업이 오너십을 가지고 있느냐의 문제가 일본의 심기를 거스른
						것이다. 그리고 이런 사회 인프라를 좌지우지하는 라인 메신저는 국가
						안보상에서 일본의 린치핀이 되었다고 생각했을 가능성이 높다. 일본의
						행정 지도는 단순히 정부의 구두 개입이 아니라 말 안들으면 제대로
						힘들어지는 일이다. 대표적인 사례로 닛산 회장이었던 카를로스 곤 구속
						사건를 보면 일본의 혼내(속마음)를 알 수 있다. 적자 기업이었던 닛산을
						구조조정을 통해 살린 카를로스 곤은 일본 재계의 영웅이었다. 그러나
						르노가 닛산과 미스비시의 지배력을 강화하고 공용 플랫폼화와 수익을
						주주 배당을 강화하자 분위기는 전환되었다. 르노-닛산-미쓰비시
						얼라이언스, 르노 등의 회장직을 수행하던 카를로스 곤이 2018년 11월
						19일, 금융상품거래법 위반, 특수배임 등의 혐의로 일본 도쿄지방검찰청
						특별수사부에 의해 체포, 구속되면서 촉발된 일련의 사태가 있다. 이후
						보석금을 내고 풀려나 가택 연금 상태이던 카를로스 곤이 극비리에
						일본을 탈출하면서 상황이 걷잡을 수 없이 커지게 되었다. 당시에 닛산을
						구원한 구원자의 이미지에서 카를로스 곤 회장은 도망자가 되었다. 이때
						일본의 여론이 일본 회사인 닛산이 프랑스계 르노의 배당 ATM기 역활을
						했다는 여론에 따라 일본의 사법 체계, 정부가 일사분란하게 움직였다.
						이런 행정 지도가 네이버가 지분을 소유한 라인에서 발생했고, 여러
						안좋은 시그널이 있었다. 한국의 여론이 안 좋아지자 한 발 뺀
						모양새인데, 이사회 구성, 경영 관련 한국인 참여 등의 보폭은 지금도
						크지 않지만 줄어들 것으로 보인다. 일본 총무성이 문제삼고 있는 부분
						요약 - 1차 행정지도 네이버사와 업무협업차원 이상으로 너무 광범위하게
						데이터를 공유하는 체제. 보안 업무를 네이버에게 전적으로 의지해야하는
						체제. 네이버의 시스템에 동승함으로서 네이버와 같은 보안업체를
						사용해야만 했던 점. 같은 보안 업체와 계약하는데, 라인측이
						보안업체에게 요청할 수 있는 조항이 없어서, 라인측은 관리감독이
						불가능한 점. 네이버측이 라인이 통보하기 전까지 해킹사실을 인지하지
						못했으며, 약 3달간 외부에 새어나가는 상태를 유지한 점. 라인측의 통보
						후, 네이버는 해킹 대응 전후에도 라인측에 1달간 정보공유를 하지않은
						점. 모회사를 포함한 전체적인 사이버 보안 거버넌스의 본질적 재고가
						필요합니다. 네이버의 시스템과의 분리/전환을 진행하면서 해소될 수는
						있으나, 현시점에서 상당한 기간이 필요하다고 하며, 분리/전환이후로도
						여전히 NAVER사에 사이버보안을 위탁하는 예정이기에, 수탁처의 리스크는
						해소되었다고 볼수 없다. 따라서 본 사안의 재발을 확실하게 방지하기
						위해서는 모회사를 포함한 그룹 전체의 사이버 보안 체제를 구축이
						필요하다. 그러기에 귀사가 위탁업처(NAVER)에 대한 정상적인 관리/감독
						기능을 수행하기위해서라도, (사이버 보안을 맡기는 위탁업처에게 상당한
						자본적 지배를 받는 관계의 재고등을 포함한) 적절한 의사결정 프로세스
						구축에 대한 구체적인 검토가 필요하고, 모회사에게 의견을 말할 수 있는
						필요가 있다. 저 괄호 안의 단어가 네이버에게 주식을 팔라는 것으로
						자본주의의 근본을 넘어선 내용이 있기에 문제가 된 것이다. 5:5 지분
						구조와 경영은 소프트뱅크, 개발은 네이버라는 이중 구조가 결과적으로
						앞으로 더 큰 문제가 될 것으로 보인다. 보이지 않게 흔들 가능성이
						농후한 이 전쟁에서 네이버는 지속적인 여론전이 필요할 것이다. 특히
						소프트뱅크와 협상이 쉽지 않겠지만 일정 동거 후 소프트 랜딩(결별)로
						계획에 담아야할 것으로 보인다. 이런 동거는 오래 가기 힘든 상황이다.
						영화 헤어질 결심이 생각나는 모호한 진행이 앞으로 계속 될 것이다.
					</Text>
				</Pressable>
				<Image
					source={LogoImage}
					style={{
						width: 300,
						height: 300,
						objectFit: "cover",
					}}
				/>
			</ScrollView> */}
		</View>
	);
};

export default App;

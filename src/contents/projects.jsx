import { Wrapper, Heading } from '../components/common'
import { FaExternalLinkAlt } from 'react-icons/fa'
import { DiJavascript, DiNodejs, DiGithubBadge } from 'react-icons/di'
import { SiNextdotjs, SiTypescript, SiExpress, SiPostgresql, SiMysql, SiAmazonec2 } from 'react-icons/si'
import { DiTrello } from 'react-icons/di'
import { DiReact } from 'react-icons/di'
import useModal from '../hooks/useModal'
import Modal from '../components/modal'
import ImageAndVideoSlider from '../components/slider'

const Projects = () => {
    const [isShowingModal, toggleModal] = useModal()
    const [isShowingModal2, toggleModal2] = useModal()
    const [isShowingModal3, toggleModal3] = useModal()

    const images1 = [
        'https://moccasin-odd-penguin-381.mypinata.cloud/ipfs/QmZNrPpebf82PQPx2kJatuU3gJj2hwmPehrSumhVvdYEJZ',
        'https://moccasin-odd-penguin-381.mypinata.cloud/ipfs/QmfHsysMuYg8CU7TJymxrBfBdAvRVtqJf7gUgrGJqsbFJC',
        'https://moccasin-odd-penguin-381.mypinata.cloud/ipfs/QmZa5jb3uJyMCMcNuvLpbhtZGYdnVwhvGwBqBxh2bmC4Bc',
        'https://moccasin-odd-penguin-381.mypinata.cloud/ipfs/QmWWULhBNcWua2EWuCaE2ZRZVS6DYRGVLBq91ra6mZUxKP'
    ]

    const images2 = [
        'https://moccasin-odd-penguin-381.mypinata.cloud/ipfs/QmepkCp2Z2ruGWjWPF4WTu3UyCCEVvwRaeyHVAmNgTtfNS',
        'https://moccasin-odd-penguin-381.mypinata.cloud/ipfs/QmYuexBnJ6GjhRfzngWKmT6H26qteTq1FRYjmD314WtGac',
        'https://moccasin-odd-penguin-381.mypinata.cloud/ipfs/QmNz5FS5prZArcioHQ9iC5d2RmNcTatx2k3CzrYZ2HfKnx',
        'https://moccasin-odd-penguin-381.mypinata.cloud/ipfs/Qma3C1qTDHLdPcaWfYK8hFkfYFxUzU7UgjZuYjwwrL5D56'
    ]

    return (
        <Wrapper>
            <Heading>프로젝트</Heading>

            <ul className="flex flex-col w-full gap-[120px]">
                {/* 첫번째 프로젝트 */}
                <li className="flex flex-col gap-[32px] md:flex-row">
                    <div className="w-full md:w-[420px] ">
                        <img
                            src="https://moccasin-odd-penguin-381.mypinata.cloud/ipfs/QmTZ69aXEcXs6QTgojGt7cQ4oJyc159WGMNEQZqCdShjep"
                            className="w-full"
                            alt="어떤어떤 프로젝트"
                        />
                        <ul className="flex text-[12px] text-slate-600 py-[8px] gap-[8px] flex-row md:flex-col items-center md:items-start">
                            <li className="text-[16px]">팀플 프로젝트 (5명)</li>
                            <li className="text-stone-500">2023. 11. 01 ~ 2023. 12. 05</li>
                            <li>back-end</li>
                            <li>
                                <button
                                    onClick={toggleModal}
                                    className="px-[16px] py-[8px] bg-gray-800 rounded-[8px] text-white hover:bg-gray-950"
                                >
                                    상세보기
                                </button>
                            </li>
                        </ul>
                    </div>
                    <div className="w-full">
                        <h2 className="flex flex-row items-center gap-[8px] text-[16px] text-slate-800 md:text-black md:text-[24px] font-semibold pb-[16px]">
                            Bounce Explorer (협약 프로젝트){' '}
                            <a href="">
                                <FaExternalLinkAlt />
                            </a>
                        </h2>

                        <p className="leading-5 text-slate-950 text-[12px] md:text-[16px] md:leading-7">
                            바운스코드와의 협약 프로젝트로 블록체인 네트워크에 존재하는 블록 및 토큰 내의 데이터를 확인할 수 있는 사이트로,
                            이더스캔과 유사한 기능을 구현하고자 하였습니다.
                        </p>

                        <h3 className="py-[16px] text-[16px] font-bold">사용 스택</h3>
                        <div className="flex flex-row text-[32px] gap-[8px] py-[8px] px-[32px]">
                            <DiJavascript />
                            <DiNodejs />
                            <DiGithubBadge />
                            <SiTypescript />
                            <SiExpress />
                            <SiPostgresql />
                            <SiAmazonec2 />
                        </div>

                        <h3 className="py-[16px] text-[16px] font-bold">주요 업무</h3>
                        <ul className="px-[32px] leading-8 list-disc list-outside text-[12px] md:text-[16px]">
                            <li>블록체인 네트워크의 블록 데이터 저장을 위한 Schema 설계</li>
                            <li>블록 Number를 통한 블록 데이터 검색 기능 구현</li>
                            <li>CA를 통한 트랜잭션 데이터 검색 기능 구현</li>
                            <li>AWS EC2를 활용한 Back-end 서버 배포</li>
                        </ul>
                    </div>
                </li>

                {/* 두번째 프로젝트 */}
                <li className="flex flex-col gap-[32px] md:flex-row">
                    <div className="w-full md:w-[420px] ">
                        <img
                            src="https://moccasin-odd-penguin-381.mypinata.cloud/ipfs/QmSgkFstntRdughcHjhskBodUGVaCCksi95GFU66N9hDPt"
                            className="w-full"
                            alt="어떤어떤 프로젝트"
                        />
                        <ul className="flex text-[12px] text-slate-600 py-[8px] gap-[8px] flex-row md:flex-col items-center md:items-start">
                            <li className="text-[16px]">팀플 프로젝트 (3명)</li>
                            <li className="text-stone-500">2023. 08. 03 ~ 2023. 08. 28</li>
                            <li>back-end, front-end</li>
                            <li>
                                <button
                                    className="px-[16px] py-[8px] bg-gray-800 rounded-[8px] text-white hover:bg-gray-950"
                                    onClick={toggleModal2}
                                >
                                    상세보기
                                </button>
                            </li>
                        </ul>
                    </div>
                    <div className="w-full">
                        <h2 className="flex flex-row items-center gap-[8px] text-[16px] text-slate-800 md:text-black md:text-[24px] font-semibold pb-[16px]">
                            Steam100 (react 프로젝트){' '}
                            <a href="https://steamclone.com">
                                <FaExternalLinkAlt />
                            </a>
                        </h2>

                        <p className="leading-5 text-slate-950 text-[12px] md:text-[16px] md:leading-7">
                            게임 사이트인 steam에서 게임의 조회수를 기준으로 순위를 매겨주는 사이트로 steam API를 통해 게임들의 데이터를 가져와서
                            순서대로 나열해주는 사이트입니다.
                        </p>

                        <h3 className="py-[16px] text-[16px] font-bold">사용 스택</h3>
                        <div className="flex flex-row text-[32px] gap-[8px] py-[8px] px-[32px]">
                            <DiJavascript />
                            <DiNodejs />
                            <DiGithubBadge />
                            <SiExpress />
                            <DiReact />
                            <SiMysql />
                            <SiAmazonec2 />
                        </div>

                        <h3 className="py-[16px] text-[16px] font-bold">주요 업무</h3>
                        <ul className="px-[32px] leading-8 list-disc list-outside text-[12px] md:text-[16px]">
                            <li>유저 및 게시판 Schema 설계</li>
                            <li>JWT를 활용한 login 유지 기능 구현</li>
                            <li>게시판 CRUD 기능 구현</li>
                            <li>Admin 기능(유저 및 게시물 관리 권한 부여) 구현</li>
                            <li>AWS EC2를 활용한 Front-end 서버와 Back-end 서버 배포</li>
                        </ul>
                    </div>
                </li>

                {/* 세번째 프로젝트 */}
                {/* <li className="flex flex-col gap-[32px] md:flex-row">
                    <div className="w-full md:w-[420px] ">
                        <img
                            src="https://moccasin-odd-penguin-381.mypinata.cloud/ipfs/QmUaQtGJrEK3SjnJyNArhWaVWe9ZUh1YCA8BbkdQH6GSHd"
                            className="w-full"
                            alt="어떤어떤 프로젝트"
                        />
                        <ul className="flex text-[12px] text-slate-600 py-[8px] gap-[8px] flex-row md:flex-col items-center md:items-start">
                            <li className="text-[16px]">팀플 프로젝트 (3명)</li>
                            <li className="text-stone-500">2023. 06. 05 ~ 2023. 06. 26</li>
                            <li>front-end, back-end</li>
                            <li>
                                <button
                                    className="px-[16px] py-[8px] bg-gray-800 rounded-[8px] text-white hover:bg-gray-950"
                                    onClick={toggleModal3}
                                >
                                    상세보기
                                </button>
                            </li>
                        </ul>
                    </div>
                    <div className="w-full">
                        <h2 className="flex flex-row items-center gap-[8px] text-[16px] text-slate-800 md:text-black md:text-[24px] font-semibold pb-[16px]">
                            Simple Market (nodeJS 프로젝트){' '}
                            <a href="">
                                <FaExternalLinkAlt />
                            </a>
                        </h2>

                        <p className="leading-5 text-slate-950 text-[12px] md:text-[16px] md:leading-7">
                            중고 거래 사이트인 당근마켓의 기능 구현을 목표로 한 유저간 거래 사이트입니다.
                        </p>

                        <h3 className="py-[16px] text-[16px] font-bold">사용 스택</h3>
                        <div className="flex flex-row text-[32px] gap-[8px] py-[8px] px-[32px]">
                            <DiJavascript />
                            <DiNodejs />
                            <DiGithubBadge />
                            <SiExpress />
                            <SiMysql />
                            <SiAmazonec2 />
                        </div>

                        <h3 className="py-[16px] text-[16px] font-bold">주요 업무</h3>
                        <ul className="px-[32px] leading-8 list-disc list-outside text-[12px] md:text-[16px]">
                            <li>유저 관리와 게시물 관리를 위한 Database를 구축했습니다.</li>
                            <li>게시물 관리 기능(CRUD)을 fallstack으로 작업을 진행, 구현했습니다.</li>                            
                            <li>게시물 통계 페이지를 구현했습니다.</li>                            
                            <li>AWS EC2를 통해 Front-end 서버와 Back-end 서버를 배포하였습니다.</li>
                        </ul>
                    </div>
                </li> */}
            </ul>

            <Modal show={isShowingModal} onCloseButtonClick={toggleModal}>
                <ImageAndVideoSlider images={images1}/>
                <br></br>
                <p className="font-bold">- 프로젝트 개요</p>
                <ul>
                    <li> 연결된 블록체인 네트워크에 존재하는 모든 블록의 정보를 보여주는 사이트로<br></br> 시중의 이더스캔과 유사한 기능을 목표로 프로젝트를 진행했습니다.</li>
                </ul>
                <br></br>
                <p className="font-bold">- 주요 기능</p>
                <ul>
                    <li> 1. 연결된 네트워크에 존재하는 전체 블록의 리스트를 제공합니다.</li>
                    <li> 2. 각 블록이 보유한 세부 정보를 정리하여 보여줍니다.</li>
                    <li> 3. 블록이 보유한 트랜잭션, 토큰 등의 리스트를 제공합니다.</li>
                    <li> 4. 각 트랜잭션, 토큰 들의 세부 정보 및 거래 내역을 정리하여 공유합니다.</li>
                </ul>
                <br></br>
                <p className="font-bold">- 프로젝트 내 주요 업무</p>
                <ul>
                    <li> 1. 백앤드 서버를 담당하여 블록 데이터 저장을 위한 Schema 및 CRUD를 설계했습니다.</li>
                    <li> 2. 프론트 담당자들과의 소통을 위한 ERD, API 작업을 진행했습니다.</li>
                    <li> 3. 백앤드 서버의 git을 담당하여 지속 관리했습니다.</li>
                    <li> 4. AWS EC2로 백앤드 서버를 배포했습니다.</li>
                </ul>
            </Modal>

            <Modal show={isShowingModal2} onCloseButtonClick={toggleModal2}>
                <ImageAndVideoSlider images={images2}/>
                <br></br>
                <p className="font-bold">- 프로젝트 개요</p>
                <ul>
                    <li> 게임 플랫폼인 steam으로 부터 API를 받아와 현재 steam 게임의 조회수를 기준으로 순위를 나열하고 <br></br> 유저에게 정보를 제공하고 게시판을 통해 유저간 소통이 가능하게 설계한 사이트입니다.</li> 
                </ul>
                <br></br>
                <p className="font-bold">- 주요 기능</p>
                <ul>
                    <li> 1. API로 게임 정보를 받아와 조회수의 순서대로 나열하여 보여줍니다.</li>
                    <li> 2. 각 게임의 세부 정보를 상세 보기로 제공합니다.</li>
                    <li> 3. 게시판 기능을 통해 타 유저의 의견을 보거나 내 의견을 올릴 수 있습니다.</li>
                    <li> 4. 관리자 계정을 통해 유저 활동을 관리할 수 있습니다.</li>
                </ul>
                <br></br>
                <p className="font-bold">- 프로젝트 내 주요 업무</p>
                <ul>
                    <li> 1. 백앤드 서버를 담당하여 게시판 기능 구현을 위한 Schema 및 CRUD를 설계했습니다.</li>
                    <li> 2. 프론트 서버에서 게시판 기능 구현을 보조했습니다.(댓글, 대댓글, 조회수 등)</li>
                    <li> 3. AWS EC2로 백앤드 서버와 프론트 앤드 서버를 배포했습니다.</li>
                </ul>
            </Modal>

            <Modal show={isShowingModal3} onCloseButtonClick={toggleModal3}>
                test3
            </Modal>
        </Wrapper>
    )
}

export default Projects

import { Wrapper, Heading } from '../components/common'
import { FaExternalLinkAlt } from 'react-icons/fa'
import { DiJavascript, DiNodejs, DiGithubBadge } from 'react-icons/di'
import { SiNextdotjs, SiTypescript, SiExpress, SiPostgresql, SiMysql, SiAmazonec2 } from 'react-icons/si'
import { DiTrello } from 'react-icons/di'
import { DiReact } from 'react-icons/di'
import useModal from '../hooks/useModal'
import Modal from '../components/modal'

const Projects = () => {
    const [isShowingModal, toggleModal] = useModal()
    const [isShowingModal2, toggleModal2] = useModal()

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
                                {/* <button
                                    onClick={toggleModal}
                                    className="px-[16px] py-[8px] bg-gray-800 rounded-[8px] text-white hover:bg-gray-950"
                                >
                                    상세보기
                                </button> */}
                            </li>
                        </ul>
                    </div>
                    <div className="w-full">
                        <h2 className="flex flex-row items-center gap-[8px] text-[16px] text-slate-800 md:text-black md:text-[24px] font-semibold pb-[16px]">
                            바운스 익스플로러 (협약 프로젝트){' '}
                            <a href="https://www.bouncexplorer.site">
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
                            <DiReact />
                            <SiNextdotjs />
                            <SiPostgresql />
                            <SiAmazonec2 />
                        </div>

                        <h3 className="py-[16px] text-[16px] font-bold">주요 업무</h3>
                        <ul className="px-[32px] leading-8 list-disc list-outside text-[12px] md:text-[16px]">
                            <li>연결된 블록체인 네트워크로부터 전달받은 데이터들을 저장하기 위한 Database를 설계했습니다.</li>
                            <li>전달 받은 데이터들의 저장, 수정 등의 기능과 클라이언트로의 데이터 전송을 위한 기능을 구현했습니다.</li>
                            <li>AWS EC2를 통해 Back-end 서버를 배포했습니다.</li>
                        </ul>
                    </div>
                </li>

                {/* 첫번째 프로젝트 */}
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
                            <li>front-end, back-end</li>
                            <li>
                                {/* <button
                                    className="px-[16px] py-[8px] bg-gray-800 rounded-[8px] text-white hover:bg-gray-950"
                                    onClick={toggleModal2}
                                >
                                    상세보기
                                </button> */}
                            </li>
                        </ul>
                    </div>
                    <div className="w-full">
                        <h2 className="flex flex-row items-center gap-[8px] text-[16px] text-slate-800 md:text-black md:text-[24px] font-semibold pb-[16px]">
                            steam100 (react 프로젝트){' '}
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
                            <li>유저 관리와 게시물 관리를 위한 Database를 구축했습니다.</li>
                            <li>유저 관리 기능 (로그인, 로그아웃, 가입 승인 등)과 게시물 관리 기능 (게시글 추가, 수정, 삭제 등)의 기능을 구현했습니다.</li>
                            <li>Front-end 서버에서 게시물 기능 일부를 (좋아요, 대댓글 등) 브라우저에 정상적으로 표기되도록 수정했습니다.</li>
                            <li>AWS EC2를 통해 Front-end 서버와 Back-end 서버를 배포하였습니다.</li>
                        </ul>
                    </div>
                </li>
            </ul>

            <Modal show={isShowingModal} onCloseButtonClick={toggleModal}>
                test
            </Modal>

            <Modal show={isShowingModal2} onCloseButtonClick={toggleModal2}>
                test2222
            </Modal>
        </Wrapper>
    )
}

export default Projects

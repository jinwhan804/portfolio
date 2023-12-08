import { Wrapper, Heading } from '../components/common'
import { DiJavascript, DiNodejs, DiGithubBadge } from 'react-icons/di'
import { FaNode } from 'react-icons/fa6'
import {
    SiNextdotjs,
    SiTypescript,
    SiJavascript,
    SiExpress,
    SiReact,
    SiRedux,
    SiMysql,
    SiPostgresql,
    SiSequelize,
    SiTailwindcss,
    SiAmazonec2,
    SiAwsamplify,
    SiNginx,
    SiStyledcomponents,
    SiHtml5,
    SiCss3,
    SiSolidity,
} from 'react-icons/si'

const Skills = () => {
    return (
        <Wrapper>
            <Heading>기술 스택</Heading>
            <ul className="flex flex-col divide-y divide-gray-400">
                <li className="flex flex-row gap-[32px] py-[32px">
                    <h3 className="text-[16px] md:text-[24px] font-extrabold md:font-semibold w-[20%] basisc-[25%]">
                        언어
                    </h3>
                    <ul className="flex flex-col gap-[16px] text-[16px] pb-[32px] font-medium w-full items-start">
                        <li className="flex flex-col gap-[8px] md:gap-[32px] md:flex-row items-baseline">
                            <span className="text-[16px] text-slate-600 md:text-[24px] basis-[20%] flex items-center gap-[8px]">
                                <SiJavascript />
                                <span className="md:w-[120px]">Javascript</span>
                            </span>
                            <ul className="list-disc list-outside leading-6 px-[20px] md:leading-8 text-[12px] md:text-[16px] ">
                                <li>변수 선언자 let, var, const에 대해 이해하였습니다.</li>
                                <li>동기, 비동기의 개념을 이해하였습니다.</li>
                                <li>예외 처리를 위한 try, catch문을 이해하였습니다.</li>
                            </ul>
                        </li>
                        <div className="  w-11/12   border-[1px] border-gray" />
                        <li className="flex flex-col gap-[8px] md:gap-[32px] md:flex-row items-baseline">
                            <span className="text-[16px] text-slate-600 md:text-[24px] basis-[20%] flex items-center gap-[8px]">
                                <SiTypescript />
                                <span className="md:w-[120px]">Typescript</span>
                            </span>
                            <ul className="list-disc list-outside leading-6 px-[20px] md:leading-8 text-[12px] md:text-[16px] ">
                                <li>DTO을 공부하고 요청, 응답 데이터의 형식을 설정할 수 있습니다.</li>
                                <li>interface을 공부하고 활용해 보았습니다.</li>
                            </ul>
                        </li>
                    </ul>
                </li>

                <li className="flex flex-row gap-[32px] py-[32px]">
                    <h3 className="text-[16px] md:text-[24px] font-extrabold md:font-semibold w-[20%] basisc-[25%]">
                        백앤드
                    </h3>
                    <ul className="flex flex-col gap-[16px] text-[16px] pb-[32px] font-medium w-full items-start">
                        <li className="flex flex-col gap-[8px] md:gap-[32px] md:flex-row items-baseline">
                            <span className="text-[16px] text-slate-600 md:text-[24px] basis-[20%] flex md:flex-col items-center gap-[8px]">
                                <div className="flex items-center gap-[8px]">
                                    <SiExpress />
                                    <span className="md:w-[120px]">Express</span>
                                </div>
                                <div className="flex items-center gap-[8px]">
                                    <FaNode />
                                    <span className="md:w-[120px]">NodeJS</span>
                                </div>
                            </span>
                            <ul className="list-disc list-outside leading-6 px-[20px] md:leading-8 text-[12px] md:text-[16px] ">
                                <li>Db 설계 및 기능 구현을 통해 클라이언트의 요청을 받아 데이터 처리했습니다.</li>
                                <li>cors 설정을 통해 원하는 도메인만 접근 허용을 해보았습니다.</li>
                                <li>JWT 토큰을 통해 로그인 상태 유지를 해보았습니다.</li>
                            </ul>
                        </li>
                        <div className="  w-11/12   border-[1px] border-gray" />
                        <li className="flex flex-col gap-[8px] md:gap-[32px] md:flex-row items-baseline">
                            <span className="text-[16px] text-slate-600 md:text-[24px] basis-[20%] flex md:flex-col items-center gap-[8px]">
                                <div className="flex items-center gap-[8px]">
                                    <SiMysql />
                                    <span className="md:w-[120px]">My SQL</span>
                                </div>
                                <div className="flex items-center gap-[8px]">
                                    <SiPostgresql />
                                    <span className="md:w-[120px]">Postgre SQL</span>
                                </div>
                                <div className="flex items-center gap-[8px]">
                                    <SiSequelize />
                                    <span className="md:w-[120px]">Sequelize</span>
                                </div>
                            </span>
                            <ul className="list-disc list-outside leading-6 px-[20px] md:leading-8 text-[12px] md:text-[16px] ">
                                <li>데이터베이스의 테이블 생성, 데이터 입력, 수정 등의 데이터 관리를 해보았습니다.</li>
                                <li>Primary Key, Foreign Key의 개념을 알고 1:1, 1:N, N:M 관계 설정을 연결해 보았습니다.</li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <li className="flex flex-row gap-[32px] py-[32px]">
                    <h3 className="text-[16px] md:text-[24px] font-extrabold md:font-semibold w-[20%] basisc-[25%]">
                        배포
                    </h3>
                    <ul className="flex flex-col gap-[16px] text-[16px] pb-[32px] font-medium w-full items-start">
                        <li className="flex flex-col gap-[8px] md:gap-[32px] md:flex-row items-baseline">
                            <span className="text-[16px] text-slate-600 md:text-[24px] basis-[20%] flex md:flex-col items-center gap-[8px]">
                                <div className="flex items-center gap-[8px]">
                                    <SiAmazonec2 />
                                    <span className="md:w-[120px]">Ec2</span>
                                </div>
                                
                                <div className="flex items-center gap-[8px]">
                                    <SiNginx />
                                    <span className="md:w-[120px]">Nginx</span>
                                </div>
                            </span>
                            <ul className="list-disc list-outside leading-6 px-[20px] md:leading-8 text-[12px] md:text-[16px] ">
                                <li>EC2로 서버 배포를 해보았습니다.</li>
                                <li>http와 https의 프로토콜 차이를 이해하고 certBot을 사용해 인증서 발급을 수행해보았습니다.</li>                                
                                <li>nginx로 proxy 설정을 해보았습니다.</li>                                
                            </ul>
                        </li>
                    </ul>
                </li>
                <li className="flex flex-row gap-[32px] py-[32px]">
                    <div className="w-[15%]">
                        <h3 className="text-[16px] md:text-[24px] font-extrabold md:font-semibold  basisc-[25%]">
                            기타 스택
                        </h3>
                    </div>
                    <div className="w-[70%]">
                        <ul className="flex  gap-[16px] text-[16px] pb-[32px] font-medium w-full items-start">
                            <li className="flex flex-col gap-[8px] md:gap-[32px] md:flex-row items-baseline">                                
                                <SiHtml5 />
                                <span className="md:w-[120px]">HTML</span>
                                <SiCss3 />
                                <span className="md:w-[120px]">CSS</span>
                                <SiSolidity />
                                <span className="md:w-[120px]">Solidity</span>
                            </li>
                        </ul>
                    </div>
                </li>
            </ul>
        </Wrapper>
    )
}

export default Skills

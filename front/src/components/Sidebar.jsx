import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import '../style.css';

const SidebarContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0 20px;
    border-radius: 10px;
`;

const WidgetWrap = styled.div`
    position: relative;
    margin-bottom: 20px;
    background-color: var(--preset--color--base-2);
    box-shadow: 0px 12px 16px 0 #888;
    border-radius: 30px;
    padding: 20px;
    width: 300px;

    &.my-profile-widget {
        height: 350px;
    }

    &.my-posts-widget {
        min-height: 450px;

        & h3 {
            font-size: 18px;
        }
    }
`;

const UserProfile = styled.div`
    display: flex;
    align-items: center;
    gap: 15px;
`;

const UserProfileImg = styled.img`
    width: 70px;
    height: 70px;
    border-radius: 50%;
    object-fit: cover;
`;

const ProfileName = styled.p`
    font-size: 20px;
`;

const MyProfileWidget = styled.div`
    padding-top: 20px;
`;

const MyProfileWidgetBtn = styled.button`
    margin-top: 20px;
    background-color: var(--preset--color--base-3);
    padding: 7px 20px;
    border: none;
    border-radius: 7px;
    font-size: 17px;
    box-shadow: 0px 3px 8px 0 var(--preset--color--base-3);
    color: var(--preset--color--white);
    transition: all 0.2s ease;

    &:hover {
        cursor: pointer;
        transform: scale(1.08);
        color: var(--preset--color--white);
    }
`;

const MyPostsWidget = styled.div`
    & ul li {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 10px 0;

        & .btn-wrap {
            display: flex;
            align-items: center;
            gap: 10px;

            & .update-btn,
            & .delete-btn {
                background-color: var(--preset--color--base-3);
                padding: 4px 10px;
                border: none;
                border-radius: 7px;
                font-size: 14px;
                box-shadow: 0px 3px 8px 0 var(--preset--color--base-3);
                color: var(--preset--color--white);
                transition: all 0.2s ease;

                &:hover {
                    cursor: pointer;
                    transform: scale(1.08);
                    color: var(--preset--color--white);
                }
            }
        }
    }
`;

const Title = styled.h3`
    margin: 10px 0 10px;
    font-size: 20px;
`;

const Sidebar = ({ user }) => {
    const navigate = useNavigate();

    return (
        <SidebarContainer>
            <WidgetWrap className="my-profile-widget">
                <UserProfile>
                    <UserProfileImg src={user.profileImage} alt={user.name} />
                    <ProfileName>{user.name}</ProfileName>
                </UserProfile>
                <MyProfileWidget>
                    <Title>내 정보</Title>
                    <MyProfileWidgetBtn onClick={() => navigate(`/profile/${user.id}`)}>프로필 보기</MyProfileWidgetBtn>
                </MyProfileWidget>
            </WidgetWrap>
            <WidgetWrap className="my-posts-widget">
                <MyPostsWidget>
                    <Title>내 글 목록</Title>
                    <ul>
                        {user.posts.map((post, index) => (
                            <li key={index}>
                                <span>{post.title}</span>
                                <div className="btn-wrap">
                                    <button className="update-btn" onClick={() => navigate(`/edit/${post.id}`)}>수정</button>
                                    <button className="delete-btn" onClick={() => navigate(`/delete/${post.id}`)}>삭제</button>
                                </div>
                            </li>
                        ))}
                    </ul>
                </MyPostsWidget>
            </WidgetWrap>
        </SidebarContainer>
    );
};

export default Sidebar;

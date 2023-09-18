import styled from "styled-components";

const Main = (props) => {
  return (
    <Container>
      <SharBox>
        <div>
          <img src="/images/user.svg" alt="" />
          <button>Start a post</button>
        </div>
        <div>
          <button>
            <img src="/images/photo-icon.png" alt="" />
            <span>Photo</span>
          </button>

          <button>
            <img src="/images/video-icon.png" alt="" />
            <span>Video</span>
          </button>

          <button>
            <img src="/images/event-icon.png" alt="" />
            <span>Event</span>
          </button>

          <button>
            <img src="/images/article-icon.png" alt="" />
            <span>Write article</span>
          </button>
        </div>
      </SharBox>
      <div>
        <Article>
          <SharedActor>
            <a>
              <img src="/images/user.svg" alt="" />
              <div>
                <span>Title</span>
                <span>Info</span>
                <span>Date</span>
              </div>
            </a>
            <button>
              <img src="/images/ellipsis.svg" alt="" />
            </button>
          </SharedActor>
          <Description>Description</Description>
          <SharedImage>
            <a>
              <img src="/images/shared-image.jpg" />
            </a>
          </SharedImage>
          <SocialCounts>
            <li>
              <button>
                <img src="/images/like-reaction.png" alt="" />
                <img src="/images/celebrate-reaction.png" alt="" />
              </button>
              <span>81</span>
            </li>
            <li>
              <a>2 comments</a>
            </li>
          </SocialCounts>
          <SocialActions>
            <button>
              <img src="/images/like-button.png" alt="" />
              <span>Like</span>
            </button>
            <button>
              <img src="/images/comment-button.png" alt="" />
              <span>Comment</span>
            </button>
            <button>
              <img src="/images/repost-button.png" alt="" />
              <span>Repost</span>
            </button>
            <button>
              <img src="/images/send-button.svg" alt="" />
              <span>Send</span>
            </button>
          </SocialActions>
        </Article>
      </div>
    </Container>
  );
};

const Container = styled.div`
  grid-area: main;
`;

const CommonCard = styled.div`
  text-align: center;
  overflow: hidden;
  margin-bottom: 8px;
  background-color: #fff;
  border-radius: 5px;
  position: relative;
  border: none;
  box-shadow: 0 0 0 1px rgb(0 0 0 / 15%), 0 0 0 rgb(0 0 0 / 20%);
`;

const SharBox = styled(CommonCard)`
  display: flex;
  flex-direction: column;
  color: #958b7b;
  margin: 0 0 8px;
  background: white;
  div {
    button {
      outline: none;
      display: flex;
      color: rgba(0 0 0 0.6);
      font-size: 14px;
      line-height: 1.5;
      min-height: 48px;
      background: transparent;
      border: none;
      align-items: center;
      font-weight: 600;
    }

    &:first-child {
      display: flex;
      align-items: center;
      padding: 15px 16px 2px 16px;

      img {
        width: 48px;
        border-radius: 50%;
        margin-right: 8px;
      }

      button {
        margin: 4px;
        flex-grow: 1;
        padding-left: 16px;
        border: 1px solid rgba(0, 0, 0, 0.15);
        border-radius: 35px;
        color: #00000099;
        background-color: white;
        text-align: center;
      }
    }

    &:nth-child(2) {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: space-around;
      padding: 2px 5px 2px 5px;
      button {
        display: flex;
        img {
          width: 36px;
          margin: 0 4px 0 -2px;
        }
        span {
          color: #00000099;
        }
      }
    }
  }
`;

const Article = styled(CommonCard)`
  padding: 0;
  margin: 0 0 8px;
  overflow: visible;
`;

const SharedActor = styled.div`
  padding-right: 40px;
  flex-wrap: nowrap;
  padding: 12px 16px;
  align-items: center;
  display: flex;

  a {
    margin-right: 12px;
    flex-grow: 1;
    overflow: hidden;
    display: flex;
    text-decoration: none;

    img {
      width: 48px;
      height: 48px;
    }

    & > div {
      display: flex;
      flex-direction: column;
      flex-grow: 1;
      flex-basis: 0;
      margin-left: 0;
      padding-left: 10px;
      overflow: hidden;

      span {
        text-align: left;

        &:first-child {
          font-size: 14px;
          font-weight: 700;
          color: rgba(0, 0, 0, 1);
        }

        &:nth-child(n + 1) {
          font-size: 12px;
          color: rgba(0, 0, 0, 0.6);
        }
      }
    }
  }

  button {
    position: absolute;
    right: 12px;
    top: 12px;
    background: transparent;
    border: none;
    outline: none;

    img {
      width: 15px;
    }
  }
`;

const Description = styled.div`
  padding: 0 16px;
  overflow: hidden;
  color: rgba(0, 0, 0, 0.9);
  font-size: 14px;
  text-align: left;
`;

const SharedImage = styled.div`
  margin-top: 8px;
  width: 100%;
  display: block;
  position: relative;
  background-color: #f9fafb;
  img {
    object-fit: contain;
    width: 100%;
    height: 100%;
  }
`;

const SocialCounts = styled.ul`
  line-height: 1.3;
  display: flex;
  align-items: center;
  overflow: auto;
  justify-content: space-between;
  margin: 0px 16px;
  padding: 8px 0px;
  border-bottom: 1px solid #e9e5df;
  list-style: none;

  li {
    display: flex;
    align-items: center;
    margin-right: 5px;
    font-size: 12px;

    button {
      display: flex;
      align-items: center;
      border: none;
      padding: 0;

      img {
        height: 20px;
      }
    }

    span,
    a {
      font-size: 13px;
      margin-left: 4px;
    }
  }
`;

const SocialActions = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  button {
    display: flex;
    width: 100%;
    padding: 6px 0px;
    justify-content: center;
    text-align: center;
    align-items: center;
    background-color: white;
    border: none;
    img {
      height: 35px;
      mix-blend-mode: multiply;
    }
    span {
      margin-left: 2px;
    }
    &:hover {
      background-color: rgba(0, 0, 0, 0.08);
    }
  }
`;

export default Main;

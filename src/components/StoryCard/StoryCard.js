import React from 'react';
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import classnames from "classnames";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import CardActionArea from "@material-ui/core/CardActionArea";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import red from "@material-ui/core/colors/red";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import gridTheme from "../../themes/gridTheme";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import StoryCardHeader from "../StoryCard/StoryCardHeader";
import StoryCardPieceCarousel from "../StoryCard/StoryCardPieceCarousel";

import Controller from "../D3TestController/Controller.js";

const dialogText = 
    "Lorem ipsum dolor sit amet, ei vix blandit invenire. In sea eruditi delenit consectetuer, ad convenire sadipscing intellegebat pri. Sit ex recusabo scriptorem scribentur. Enim elaboraret in qui, pri ut consequat instructior.  Ut eirmod impetus has. Ei magna nonumes interpretaris mel, audiam mentitum te mei. Ea has dolor insolens adipiscing. Ius graeci sapientem persecuti ex, his augue putent ut.  Mei ea illum debet petentium. Te malis ignota dignissim ius, nam at novum paulo democritum. Velit fabulas evertitur nec ex, cum doming ponderum ad. Ius no prima insolens incorrupte, nam dolores facilisis id, id consequat reprehendunt pri.  Has officiis suavitate cu, eos an errem audiam recusabo. Animal tibique salutandi ut eos, ei has oportere adolescens. Sed ea fuisset adolescens, ad usu saepe vocent, vix an natum mollis blandit. Ex has posse scaevola theophrastus, an qui admodum periculis intellegat.  Duo eros oporteat cu. Ex duis sale impetus usu. Vis noster intellegat voluptatibus at, vis an simul tamquam invidunt. Dicit ignota recusabo in vel, euismod aliquid invidunt eam no, semper iisque eos an.  Iudico epicuri adolescens vix te, dicam inermis lobortis duo an. An autem accusamus pro. At mel prima option inermis, cu eos eros falli legimus. Usu eu essent malorum menandri, mollis aliquid eum no. Ne vix dolore corrumpit, enim velit qui ei.  Quo in nominavi dissentiunt, etiam ceteros et ius. Alii luptatum ne quo, per ea graeco complectitur. His an vero scriptorem. Mel singulis delicata prodesset in, at magna meliore invenire duo. Meis facete pri et.  Ut timeam aliquip conceptam his, in paulo dignissim sed. Saperet disputationi ei vim, mei partem causae repudiandae no. Pri an hinc sonet option, id idque impedit mei, mnesarchum contentiones ut vis. Dictas eirmod ut nam, in malorum graecis mel. Quis agam ea duo, dicta feugiat debitis cu nec. Vim cu ridens semper pertinax, no vim summo nostrud sententiae.  Justo dolores cu mel. Usu facer vituperatoribus an, aperiri dignissim nec id. Usu et postea iuvaret dissentiunt. Ad alia dicam sit, no ridens comprehensam has. Ea oporteat gubergren sea, ius no principes definitionem. Mei voluptaria scripserit ad, eos erat delicata iudicabit in.  Cum ubique sententiae ei, ex vim probatus forensibus accommodare. Consul percipitur an mel, dicam consectetuer pri ne. Duo dolorem repudiandae te, mel impedit corrumpit ad. In tation instructior mel. Vix oratio quaerendum id, ei vis quis accusamus consequuntur. Mea ad dolor verterem intellegam.  Ad nullam scripserit pro, pri in debitis omnesque. Vim cu omnium labitur, dicunt option iuvaret cum an, mea brute timeam aliquam ei. Epicuri ocurreret at vis. Est at eius essent. Te fugit recteque persequeris mea, ex duo falli iuvaret propriae, vide duis delectus eum et. Eum tibique appareat accommodare ea, ius magna dissentias no.  Te modo volutpat vis, ut nibh error munere mei. Aeque doming consequuntur qui ea. Ludus congue maiorum ut cum, prima assueverit in est. Cum eirmod offendit corrumpit in, cum luptatum torquatos in, in pri quis vituperatoribus. Clita tritani percipit ad duo. Has quas suscipit moderatius eu, vide omnis omnesque at duo, cum ut nullam posidonium philosophia.  Sed an alii nominavi appareat. Viderer legendos qui in, an ocurreret conceptam nam. Ius id scripserit concludaturque, mei hinc justo persecuti ei. Ea assum commodo offendit est, pro augue periculis cu, ut quot patrioque eam. His ex vide scripta placerat, ad qui perpetua tractatos partiendo, per reque gloriatur reformidans in. Ea usu invidunt erroribus, id brute regione facilisi nec.  Nam quod adipisci ut. In quo sumo dicam epicurei, eros fugit vim te. Sed ex prompta scaevola, unum malorum argumentum mea in. Nam in cibo moderatius. Nec et corpora probatus deserunt, quem choro vim id, ex elit erroribus laboramus ius. Te essent omittam est. Pro timeam antiopam ad.  Id hinc movet ius, cu nisl sumo voluptua eum. Ad enim facete equidem cum. Ea qui nemore omnesque indoctum, omnes voluptatum assueverit ei cum. Dicant aliquam eu eum. Eruditi perpetua nec at, nobis solet oratio per ex, no nihil persius assueverit ius.  Ius posse soleat accusamus ut. Est porro periculis id, te vim viderer iudicabit. Mei at suas aperiam laoreet, vel te sint periculis contentiones. Vim error lobortis at. Id sed euismod invidunt inciderint, alterum propriae qui ex, quo an equidem intellegebat. Case tractatos dissentias cum no.  Impetus ceteros no sit, vim dolore inermis id. Ex timeam ocurreret ius, verterem pertinax sed cu, vix ex regione accusata evertitur. Per ex ponderum adipisci, mea id quando dolore blandit. Ut mucius forensibus qui, usu te elaboraret philosophia. Dolorum intellegat deterruisset et duo, solum nostrud vim at, ipsum mediocrem duo in.  Utinam iracundia et pro, duo possim ornatus maluisset ea. Eos soluta facilis similique no, erant minimum omnesque ea has, vix delectus qualisque te. Vis ad assentior persecuti, ad adhuc commodo eum. Ut pro modus nihil munere, magna eirmod commune at nam. At cum quis dolore inimicus. Id explicari definiebas has, omnesque ponderum qui ex, an cum possit omnium persius.  Ex pri partem equidem ornatus. Cum diam copiosae officiis no, at quis suavitate vis. Vix tale utamur definiebas et. Eum reque consul ocurreret te. An movet adipiscing sea. Ei dico melius vituperatoribus vis.  Suas delenit reprehendunt cu sea. Eu ius facilisi intellegebat. At duo utinam salutandi, at idque propriae usu, ex his atqui praesent dissentiet. Qui et stet quaerendum, inimicus mediocrem mea in, sed utroque nominati et. Alterum facilisis persecuti qui at, ne cum tincidunt conceptam, ad qui probo essent nominavi.";

const styles = theme => ({
    media: {
        height: 0,
        paddingTop: "56.25%" // 16:9
    },
    actions: {
        display: "flex"
    },
    expand: {
        transform: "rotate(0deg)",
        transition: theme.transitions.create("transform", {
        duration: theme.transitions.duration.shortest
        }),
        marginLeft: "auto",
        [theme.breakpoints.up("xs")]: {
        // marginRight: -8
        }
    },
    expandOpen: {
        transform: "rotate(180deg)"
    },
    avatar: {
        backgroundColor: red[500]
    },
    dialog: {
        marginTop: -30,
        marginBottom: -30
    },
    dialogContent: {
        minWidth: "90%",
        maxWidth: "90%"
    },
    card: {
        [theme.breakpoints.down("xs")]: {
          maxWidth: 250,
          marginLeft: "auto",
          marginRight: "auto"
        },
        // [theme.breakpoints.down("sm")]: {
        //   maxWidth: 400,
        //   marginLeft: "auto",
        //   marginRight: "auto"
        // }
        // margin: 12,
    }
});

class StoryCard extends React.Component {
    state = {
        expanded: false,
        open: false
      };

      // constructor(props) {
      //   super(props);
      //   console.log(this.props);
      // }

      handleClose = () => {
        this.setState({
          open: false
        });
      };
    
      handleClick = () => {
        this.setState({
          open: true
        });
      };
    
      handleExpandClick = () => {
        this.setState(state => ({ expanded: !state.expanded }));
      };
    
      render() {
        const { classes } = this.props;
        const { open } = this.state;
        const { data } = this.props;
    
        return (
          <div>
            <Dialog
              open={open}
              onClose={this.handleClose}
              classes={{ paper: classes.dialogContent }}
            >
              <DialogTitle>Test Dialog Box</DialogTitle>
              <DialogContent>
                <DialogContentText>{dialogText}</DialogContentText>

                {/* D3 test */}
                <Controller />

              </DialogContent>
              <Button variant="contained" color="primary" onClick={this.handleClose}>
                OK
              </Button>
            </Dialog>
            <Card className={classes.card}>

              <StoryCardHeader data={data} />

              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image={data.cardImage.fluid.src}
                  title="Sloth!"
                />

                <CardContent>
                  <Typography component="p">
                    This impressive paella is a perfect party dish and a fun meal to
                    cook together with your guests. Add 1 cup of frozen peas along
                    with the mussels, if you like.
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions className={classes.actions} disableActionSpacing>
                <IconButton aria-label="Add to favorites">
                  <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="Share">
                  <ShareIcon />
                </IconButton>
    
                <Button
                  variant="contained"
                  color="secondary"
                  onClick={this.handleClick}
                >
                  Click here
                </Button>
    
                <IconButton
                  className={classnames(classes.expand, {
                    [classes.expandOpen]: this.state.expanded
                  })}
                  onClick={this.handleExpandClick}
                  aria-expanded={this.state.expanded}
                  aria-label="Show more"
                >
                  <ExpandMoreIcon />
                </IconButton>
              </CardActions>
              <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
                <CardContent>

                    <StoryCardPieceCarousel data={ data } />

                </CardContent>
              </Collapse>
            </Card>
          </div>
        );
      }
}

StoryCard.propTypes = {
    classes: PropTypes.object.isRequired
  };
  
  export default gridTheme(withStyles(styles)(StoryCard));